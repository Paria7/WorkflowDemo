import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { field, value, FormDetailsModel } from 'shared/models/form/form.model';
import swal from 'sweetalert2';
import { Utils } from "shared";
import { HttpClient } from '@angular/common/http';
import { FormService } from 'shared/services/form.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.scss']
})
export class FormDetailsComponent implements OnInit {

  public formDetailsModel: FormDetailsModel

  constructor(
    public dialogRef: MatDialogRef<FormDetailsComponent>,
    private http: HttpClient,
    private formService: FormService,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private utils: Utils,
  ) { }

  value: value = {
    label: "",
    value: ""
  };
  success = false;

  fieldModels: Array<field>;

  modelFields: Array<field> = [];
  model: any = {
    name: '',
    description: '',
    theme: {
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    attributes: this.modelFields
  };

  report = false;
  reports: any = [];

  ngOnInit() {
    this.getAllFormControl();
  }

  getAllFormControl() {
    return this.formService.getAll().subscribe(
      data => {
        this.fieldModels = data;
        console.log('control list', data);
      }
    )
  }

  protected GetFormDetailsModel() {
    this.formDetailsModel = {
      Content: JSON.stringify(this.model),
      Name: this.model.name,
      Description: this.model.description
    };
  }

  public save() {
    this.GetFormDetailsModel();
    console.log('this.formDetailsModel', this.formDetailsModel);
    const action = () => {
      this.formService.saveFormData(this.formDetailsModel).subscribe(() => {
        this.dialogRef.close(true);
      });
    };

    this.translateService.get('Common.SaveSuccessfully').subscribe((message) => {
      this.utils.confirm(message).subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          action();
        }
      });
    });
  }

  onDragStart(event: DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {

      if (event.dropEffect === "copy")
        event.data.name = event.data.type + '-' + new Date().getTime();
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }

  addValue(values) {
    values.push(this.value);
    this.value = { label: "", value: "" };
  }

  removeField(i) {
    swal({
      title: 'Are you sure?',
      text: "Do you want to remove this field?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove!'
    }).then((result) => {
      if (result.value) {
        this.model.attributes.splice(i, 1);
      }
    });

  }

  updateForm() {
    let input = new FormData;
    input.append('id', this.model._id);
    input.append('name', this.model.name);
    input.append('description', this.model.description);
    input.append('bannerImage', this.model.theme.bannerImage);
    input.append('bgColor', this.model.theme.bgColor);
    input.append('textColor', this.model.theme.textColor);
    input.append('attributes', JSON.stringify(this.model.attributes));
  }


  initReport() {
    this.report = true;
    let input = {
      id: this.model._id
    }
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }

  submit() {
    let valid = true;
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    console.log('validationArray', validationArray);
    validationArray.reverse().forEach(field => {
      console.log(field.label + '=>' + field.required + "=>" + field.value);
      if (field.required && !field.value && field.type != 'checkbox') {
        swal('Error', 'Please enter ' + field.label, 'error');
        valid = false;
        return false;
      }
      if (field.required && field.regex) {
        let regex = new RegExp(field.regex);
        if (regex.test(field.value) == false) {
          swal('Error', field.errorText, 'error');
          valid = false;
          return false;
        }
      }
      if (field.required && field.type == 'checkbox') {
        if (field.values.filter(r => r.selected).length == 0) {
          swal('Error', 'Please enterrr ' + field.label, 'error');
          valid = false;
          return false;
        }

      }
    });
    if (!valid) {
      return false;
    }
    console.log('Save', this.model);
    let input = new FormData;
    input.append('formId', this.model._id);
    input.append('attributes', JSON.stringify(this.model.attributes))
  }
}

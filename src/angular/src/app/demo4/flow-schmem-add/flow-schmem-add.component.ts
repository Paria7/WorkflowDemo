import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { field, value } from 'shared/models/form/form.model';
import { FormService } from 'shared/services/form.service';
import { DndDropEvent } from 'ngx-drag-drop';
import { NzMessageService, NzModalRef, NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { FlowSchemeInsertModel } from "shared/models/workflow";
import { WorkflowService } from "shared/services/workflow.service";
import * as d3 from 'd3';
import { MatDialog } from '@angular/material';
import { NodeParamsetComponent } from '../../node-paramset/node-paramset.component';
import { NodeSelectfileComponent } from '../../node-selectfile/node-selectfile.component';

declare const jsPlumb: any

@Component({
  selector: 'app-flow-schmem-add',
  templateUrl: './flow-schmem-add.component.html',
  styleUrls: ['./flow-schmem-add.component.scss']
})
export class FlowSchmemAddComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  success: boolean;
  show: any;

  modelFields: Array<field> = [];
  model: any = {
    name: 'Form Name...',
    description: 'Form Description...',
    theme: {
      bgColor: "ffffff",
      textColor: "555555",
      bannerImage: ""
    },
    attributes: this.modelFields
  };

  value: value = {
    label: "",
    value: ""
  };

  //workflow
  tplModal: NzModalRef;
  tools$: Observable<any[]>;
  tool$: Observable<any>;
  lastDropEvent: DndDropEvent[] = [];
  currentNodeData: any;
  instance: any;
  active = 0;
  code = 0;
  offx = 0;
  offy = 0;
  flowModel: FlowSchemeInsertModel;
  //workflow

  constructor(
    private msg: NzMessageService,
    public dialogRef: MatDialogRef<FlowSchmemAddComponent>,
    private _formBuilder: FormBuilder,
    private formService: FormService,
    private workflowService: WorkflowService,
    private modalService: NzModalService,
    private dialog: MatDialog,
  ) {
    this.getData();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    })

    this.getTools(this.active);
    console.log('test', this.active);
    let that = this;
    jsPlumb.ready(function () {

      let color = "#5b5a57";
      console.log('color', color);
      that.instance = jsPlumb.getInstance({
        Connector: ["Bezier", { curviness: 50 }],
        DragOptions: { cursor: "pointer", zIndex: 2000 },
        PaintStyle: {
          strokeStyle: color, lineWidth: 3
        },
        Overlays: [["PlainArrow", { location: 1, width: 12, length: 12 }]],
        Endpoint: ["Dot", { radius: 5 }],
        EndpointStyle: { fillStyle: "#567567" },
        HoverPaintStyle: { strokeStyle: "#7073EB" },
        EndpointHoverStyle: { fillStyle: "#7073EB" },
        Container: "flow-panel",
        ConnectionOverlays: [["Custom", {
          create: function (component) {
            return $("<button title='选择输入文件'><i class='anticon anticon-select'></i></button>");
          },
          location: 0.5,
          events: {
            click: function (Overlay, originalEvent) {
              that.selectInputfileModal(Overlay.component.sourceId, Overlay.component.sourceId.split('-'[1]));
            }
          }
        }]]
      });
      that.instance.bind("connection", function (connInfo, originalEvent) {
        // that.http.post('/tool/check', { sourcenode: connInfo.connection.sourceId.split('-')[1], targetnode: connInfo.connection.targetId.split('-')[1] }).subscribe(res => {
        //   if (!res) {
        //     that.msg.error('输出的文件格式与目标工具的输入格式不搭配，请重新选择！', { nzDuration: 3000 });
        //     jsPlumb.detach(connInfo.connection);
        //   }
        // });
      });
      $('#flow-panel').on('drop', function (ev) {
        console.log("ev", ev);
        if (ev.target.className.indexOf('_jsPlumb') >= 0) {
          return;
        }
        ev.preventDefault();
        let mx = '' + (ev.originalEvent.offsetX - that.offx) + 'px';
        let my = '' + (ev.originalEvent.offsetY - that.offy) + 'px';
        let node = that.addNode(that.instance, that.code + '-' + that.currentNodeData.id, that.currentNodeData, { x: mx, y: my });
        that.addPorts(that.instance, node, ["Top", "Bottom", "Left", "Right"]);
        that.instance.draggable($(node), {
          containment: 'parent'
        });
        that.code++;
      }).on('dragover', function (ev) {
        ev.preventDefault();
        console.log('on drag over');
      });
      jsPlumb.fire("jsFlowLoaded", that.instance);
      that.instance.bind('dblclick', function (conn) {
        jsPlumb.detach(conn)
      })
    })


  }

  getAllFormControl() {
    return this.formService.getAll().subscribe(
      data => {
        this.model.attributes = data;
        this.modelFields = data;
        // this.model.attributes = '[{"type":"text","icon":"fa - font","label":"Text","description":"Enter your name","placeholder":"Enter your name","className":"form - control","subtype":"text","regex":"","handle":true,"name":"text - 1567507976342"},{"type":"email","icon":"fa - envelope","required":true,"label":"Email","description":"Enter your email","placeholder":"Enter your email","className":"form - control","subtype":"text","errorText":"Please enter a valid email","handle":true,"name":"email - 1567507979345"},{"type":"phone","icon":"fa - phone","label":"Phone","description":"Enter your phone","placeholder":"Enter your phone","className":"form - control","subtype":"text","errorText":"Please enter a valid phone number","handle":true,"name":"phone - 1567507982131"}]';
        console.log('control list', data);
        console.log('this.model', this.model);
      }
    )
  }

  public loadForm($event) {
    console.log($event);
    this.getAllFormControl();
    // this.nowDate = new Date($event.value, 0, 1);
    // this.renderCalendar(this.nowDate);
  }

  public save() { }

  //workflow start
  addNode(instance, nodeId, data, position) {
    let panel = d3.select("#flow-panel");
    console.log('panel', panel);
    let that = this;
    //let card = "<div class='huangcard'><div class='zuo'><div class='card-content'><i class='anticon anticon-user'></i><span class='mes'>" + data.id + "</span></div><div class='card-content'><span class='mes'>名称：</span></div><div class='card-content'><span class='mes'>角色：</span></div><div id='" + nodeId + "-setting' title='参数设置'></div></div></div>";
    let card = data.content;
    panel.append('div')
      .style('position', 'absolute')
      .style('top', position.y).style('left', position.x)
      .style('width', '200px').style('bachground-color', 'white')
      .style('border-radius', '8px')
      .attr('id', nodeId);
    $('#' + nodeId).append($(card));
    $('#delete').click(function () {
      instance.detachAllConnections(nodeId);
      instance.deleteEndpoint(nodeId + "-Top");
      instance.deleteEndpoint(nodeId + "-Bottom");
      instance.deleteEndpoint(nodeId + "-Left");
      instance.deleteEndpoint(nodeId + "-Right");
      instance.remove(nodeId);
    })

    $('#setting').click(function () {
      that.createSettingModal(nodeId.split('-')[1]);
    })

    $('#checkdelete').click(function () {
      instance.detachAllConnections(nodeId);
      instance.deleteEndpoint(nodeId + "-Top");
      instance.deleteEndpoint(nodeId + "-Bottom");
      instance.deleteEndpoint(nodeId + "-Left");
      instance.deleteEndpoint(nodeId + "-Right");
      instance.remove(nodeId);
    })

    $('#checksetting').click(function () {
      that.createSettingModal(nodeId.split('-')[1]);
    })
    return jsPlumb.getSelector('#' + nodeId)[0];
  }

  createSettingModal(toolId): void {
    this.dialog.open(NodeParamsetComponent,
      {
        minWidth: '500px',
        minHeight: '600px'
        // data: Object.assign({}, toolId)
      }).afterClosed().subscribe((dialogResult: boolean) => {
        if (dialogResult) {
          //this.getTpmPlans();
        }
      });
  }

  addPorts(instance, node, ports) {
    for (let i = 0; i < ports.length; i++) {
      let paintStyle = { radius: 5, fillStyle: '#D4FFD6' };
      instance.addEndpoint(node, {
        uuid: node.getAttribute("id") + "-" + ports[i],
        paintStyle: paintStyle,
        anchor: ports[i],
        maxConnections: -1,
        isSource: true,
        isTarget: true
      });
    }
  }

  //test data
  list: any = [];

  getData() {
    this.list.push({
      id: 0,
      name: "Start",
      inputFile: false,
      content: "<div class='startCard' style='text-align:center;color:white'>Start</div>"
    });

    this.list.push({
      id: 1,
      name: "Output",
      inputFile: true,
      content: "<div class='huangcard'><div class='zuo'><div class='card-content'><span class='mes'>Name: Test Step1</span></div><div class='card-content'><span class='mes'>Role: Engineer</span></div><div style='float:left' id='setting' title='setting'><i class='Bosch-Ic Bosch-Ic-edit'></i></div><div style='float:left' id='delete' title='delete'><i class='Bosch-Ic Bosch-Ic-delete'></i></div></div></div>",
    });

    this.list.push({
      id: 2,
      name: "Check",
      inputFile: true,
      //content: "<div class='diamond_outer'><div class='diamond_text'>Name:</div><div class='diamond_text'>Role</div><div class='diamond_bottom'></div><div style='float:left' id='setting' title='setting'><i class='Bosch-Ic Bosch-Ic-edit'></i></div><div style='float:left' id='delete' title='delete'><i class='Bosch-Ic Bosch-Ic-delete'></i></div></div>",
      content: "<div class='checkcard'><div class='zuo'><div class='card-content'><span class='checktext'>Name:</span></div><div class='card-content'><span class='checktext'>Role</span></div><div class='checktext' style='float:left' id='checksetting' title='setting'><i class='Bosch-Ic Bosch-Ic-edit'></i></div><div class='checktext' style='float:left' id='checkdelete' title='delete'><i class='Bosch-Ic Bosch-Ic-delete'></i></div></div></div>",
    });

    this.list.push({
      id: 3,
      name: "End",
      inputFile: false,
      content: "<div class='startCard' style='text-align:center;color:white'>End</div>"
    });
  }

  getTools = (type: number) => {
    this.tools$ = this.list;
    this.active = type;
    console.log('this.tools$', this.list);
  }

  selectInputfileModal(nodeId, toolId) {
    console.log("输入文件选择" + nodeId + 'tool' + toolId)
    this.modalService.create({
      nzTitle: '输入文件选择',
      nzContent: NodeSelectfileComponent,
      // nzComponentParams: {
      //   projectId: 'jiance1',
      //   nodeId: nodeId,
      //   toolId: toolId
      // },
      nzMaskClosable: false,
      nzFooter: null,
    });
  }

  onDragStart(event: DragEvent) {
    this.offx = event.offsetX;
    this.offy = event.offsetY;
  }

  onDragEnd(event: DragEvent) {
  }

  onDraggableCopied(event: DragEvent) {
  }

  onDraggableLinked(event: DragEvent) {
  }

  onDraggableMoved(event: DragEvent) {
  }

  onDragCanceled(event: DragEvent) {
  }

  onDragover(event: DragEvent) {
  }

  onDrop(event: any) {
    this.lastDropEvent.push(event);
    this.currentNodeData = event.data;
  }

  // saveFlow() {
  //   let connects = [];
  //   let nodes = [];
  //   $.each(this.instance.getConnections(), function (idx, connection) {
  //     connects.push({
  //       ConId: connection.id,
  //       SourceId: connection.endpoints.map(res => res._jsPlumb.uuid)[0],
  //       TargetId: connection.endpoints.map(res => res._jsPlumb.uuid)[1],
  //     });
  //   });
  //   $("#flow-panel .node").each(function (idx, elem) {
  //     var $elem = $(elem);
  //     nodes.push({
  //       NodeId: $elem.attr('id'),
  //       PositionX: parseInt($elem.css("left"), 10),
  //       PositionY: parseInt($elem.css("top"), 10)
  //     });
  //   });
  //   let flowChart = { nodes: nodes, connects: connects };
  //   var flowChartJson = JSON.stringify(flowChart);
  //   console.log('flowChartJson', flowChartJson);
  //   $('#jsonOutput').val(flowChartJson);
  //   this.flowModel = {
  //     SchemeContent: JSON.stringify(flowChart)
  //   }
  //   this.workflowService.saveFlowScheme(this.flowModel).subscribe(data => {
  //     console.log('response', data);
  //   });
  // }

  // load() {
  //   let that = this;
  //   $("#flow-panel .node").each(function (idx, elem) {
  //     that.instance.remove($(elem).attr('id'))
  //   });
  //   if ($('#jsonInput').val() != '') {
  //     let flowChartJson = JSON.parse($('#jsonInput').val());
  //     flowChartJson.nodes.forEach((element, index) => {
  //       let data = this.list[element.NodeId.split('-')[1]];
  //       let node = this.addNode(this.instance, element.NodeId, data, { x: element.PositionX + 'px', y: element.PositionY + 'px' });
  //       this.addPorts(this.instance, node, ["Top", "Bottom", "Left", "Right"]);
  //       this.instance.draggable($(node), {
  //         containment: 'parent'
  //       });
  //       if (index == flowChartJson.nodes.length - 1) {
  //         flowChartJson.connects.forEach(element => {
  //           this.instance.connect({ uuids: [element.SourceId, element.TargetId] });
  //         });
  //       }
  //     })
  //   }
  // }
  //workflow end
}

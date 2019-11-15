export interface FlowSchemeInsertModel {
    SchemeContent: string;
}

export class FlowFields {

}

export interface FlowSchemeModel {
    SchemeCode?: string;

    SchemeName?: string;
    SchemeType?: string;

    SchemeVersion?: string;

    SchemeContent?: string;

    FrmId?: string;

    FrmType?: string;

    AuthorizeType?: string;

    SortCode?: string;

    Disabled?: string;

    Description?: string;
}

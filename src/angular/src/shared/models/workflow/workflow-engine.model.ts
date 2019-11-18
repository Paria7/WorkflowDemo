export interface SchemeForDocumentOutput {
    scheme?: string;
    commands: SchemeForDocumentCommandOutput[];
}

export interface SchemeForDocumentCommandOutput {
    name?: string;
    localizedName?: string;
    classifier?: string;
}

export interface WorkflowSchemeDto {
    Code: string | undefined;
}

export interface GetWorkflowSchemesOutput {
    Schemes: WorkflowSchemeDto[] | undefined;
    id: number | undefined;
}
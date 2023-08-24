export interface NodeModel {
    type: 'folder' | 'file' | 'unset' ;
    name?: string;
    children?: NodeModel[];
    id: string;
    editable?:boolean
    deleteButton?:boolean
}
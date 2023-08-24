import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeModel } from '../node.model';

@Component({
  selector: 'app-recursive-node',
  templateUrl: './recursive-node.component.html',
  styleUrls: ['./recursive-node.component.scss']
})
export class RecursiveNodeComponent {
  @Input() node!: NodeModel;
  @Output() deleteNode = new EventEmitter<string>();


  isFolder(node: any): boolean {
    return node.type === 'folder'
  }

  isFile(node: any): boolean {
    return node.type === 'file'
  }

  hasChildren(node: any): boolean {
    return node.children.length > 0
  }

  renameNode(node: NodeModel): void {
    console.log(node);
    node.editable = false;
    if (node.name === "")
      this.deleteNode.emit(node.id);
  }

  cancelNode(node: NodeModel): void {
    this.deleteNode.emit(node.id);
  }

  showButton(node: NodeModel) {
    node.deleteButton = true;
  }

  hideButton(node: NodeModel) {
    node.deleteButton = false;
  }

  addChild(node: NodeModel) {
    console.log(node)
    let newNode: NodeModel = { id: Date.now().toString(), type: "unset", name: "", children: [], editable: true ,deleteButton:false }
    this.addChildById(node, node.id, newNode)
    console.log(node)
  }

  addChildById(node: NodeModel, targetId: string, childToAdd: NodeModel) {
    if (node.id === targetId) {
      if (!node.children) {
        node.children = [];
      }
      node.children.push(childToAdd);
      return true;
    } else if (node.children) {
      for (const childNode of node.children) {
        if (this.addChildById(childNode, targetId, childToAdd)) {
          return true;
        }
      }
    }
    return false;
  }

  updateType(node:NodeModel,type:'folder' | 'file' | 'unset'){
    node.type=type
    console.log(node,'---')
  }

}

import { Component } from '@angular/core';
import { NodeModel } from '../node.model';

@Component({
  selector: 'app-folder-structure',
  templateUrl: './folder-structure.component.html',
  styleUrls: ['./folder-structure.component.scss']
})
export class FolderStructureComponent {
  rootFolder: NodeModel = {
    id: "1",
    type: "folder",
    name: "Root",
    children: [{
      id: "3",
      type: "folder",
      name: "my_first_folder",
      children: [{
        id: "5",
        type: "file",
        name: "first_doc.html",
        children: [],
        editable: false,
        deleteButton:false
      },
      {
        id: "6",
        type: "file",
        name: "second_doc.jpeg",
        editable: false,
        deleteButton:false
      },{
        id: "2",
        type: "folder",
        name: "my_second_folder",
        children: [
          {
            id: "22",
            type: "file",
            name: "file_in_second_folder.txt",
            children: [],
            editable: false,
            deleteButton:false
          },
          {
            id: "23",
            type: "folder",
            name: "another_folder",
            children: [
              {
                id: "32",
                type: "file",
                name: "random.txt",
                children: [],
                editable: false,
                deleteButton:false
              },
              {
                id: "332",
                type: "file",
                name: "another_file.png",
                children: [],
                editable: false,
                deleteButton:false
              },
              {
                id: "52",
                type: "file",
                name: "hello_world.html",
                children: [],
                editable: false,
                deleteButton:false
              }
            ],
            editable: false,
            deleteButton:false
          }
        ],
        editable: false,
        deleteButton:false
      }],
      editable: false,
      deleteButton:false
    }]
  }
  isAddRootFolderDisabled:boolean=false




  fileStructureJSON(): string {
    return JSON.stringify(this.rootFolder.children, null, 4);
  }

  addToRootFolder(): void {
    let newNode: NodeModel = { id: Date.now().toString(), type: "folder", name: "", children: [], editable: true }
    this.rootFolder.children?.push(newNode)
  }

  removeNode(nodeId: any) {
    console.log(nodeId)
    this.rootFolder.children?.forEach((node, index) => {
      this.deleteNode(node, nodeId, index)
    })

  }

  deleteNode(node: NodeModel, nodeId: any, index?: number) {
    console.log(node,index,nodeId)
    if (node.id === nodeId) {
      if (index)
        this.rootFolder.children?.splice(index, 1)
      return
    }
    if (node.children && node.children.length > 0) {
      node.children.map(child => this.deleteNode(child, nodeId))
    }
  }

 

  
}

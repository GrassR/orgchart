import { Component, OnInit } from '@angular/core';
import "src/assets/orgchart.js";
declare var OrgChart: any;

@Component({
  selector: 'app-project-chart',
  templateUrl: './project-chart.component.html',
  styleUrls: ['./project-chart.component.css']
})
export class ProjectChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = new OrgChart(document.getElementById("projectTree"), {
      template: "luba",
      enableDragDrop: true,
      toolbar: true,
      menu: {
        pdf: { text: "Export PDF" },
        png: { text: "Export PNG" },
        svg: { text: "Export SVG" },
        csv: { text: "Export CSV" }
      },
      nodeMenu: {
        details: { text: "Details" },
        add: { text: "Add New" },
        edit: { text: "Edit" },
        remove: { text: "Remove" },
      },
      nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
        field_number_children: "field_number_children"
      },
      nodes: [

        { id: 1, name: "EAM-project" },
        { id: 2, pid: 1, name: "Project Design"},
        { id: 3, pid: 1, name: "Project Develop"},
        { id: 4, pid: 1, name: "Project Test"},
        { id: 5, pid: 2, name: "Function List" },
        { id: 6, pid: 2, name: "Interface Design"},
        { id: 7, pid: 3, name: "Program" },
        { id: 8, pid: 4, name: "Test" },

      ]
    });
}

}

import { Component, OnInit } from '@angular/core';
import "src/assets/orgchart.js";
declare var OrgChart: any;

@Component({
  selector: 'app-enterprise-chart',
  templateUrl: './enterprise-chart.component.html',
  styleUrls: ['./enterprise-chart.component.css']
})
export class EnterpriseChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var chart = new OrgChart(document.getElementById("tree"), {
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
      
        { id: 1, name: "CEO"},
        { id: 2, pid: 1, name: "Sales department" },
        { id: 3, pid: 1, name: "Technical department"},
        { id: 4, pid: 1, name: "Human Resources Department",},
        { id: 5, pid: 1, name: "Marketing department", },
        { id: 6, pid: 2, name: "Zuyi", title: "Developer", img:"./assets/zuyi.jpg"},
        { id: 7, pid: 3, name: "Gavi", title: "Director of sales", img: "./assets/Gavi.jpg" },
        { id: 8, pid: 4, name: "Yasin", title: "Personnel manager", img: "./assets/yasin.jpg" },
        { id: 9, pid: 5, name: "Zuyi", title: "Marketing Manager", img: "./assets/zuyi.jpg" }

      ]
    });
}


}

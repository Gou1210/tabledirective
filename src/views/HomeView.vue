<template>
  <div class="home">
    <table v-tableSelect='state' border="1">
      <tr v-for="(rowData,rowIndex) of state.tableData" :key="rowIndex">
        <th>{{rowData.row}}</th>
        <td :data-row='rowIndex' :data-column='columnIndex' :class="{'selected':columnData.selected}" :key="columnIndex" v-for="(columnData,columnIndex) of rowData.data">{{columnData.content}}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import vTableSelect from './directives/tableSelect'
import {reactive, watch} from 'vue'

 const data = [
  {
    row:'x',
    data:[
      {
        id:1,
        content:1,
        selected:false
      },
      {
        id:2,
        content:2,
        selected:false
      },
      {
        id:3,
        content:3,
        selected:false
      },
      {
        id:4,
        content:4,
        selected:false
      }
    ]
  },
  {
    row:'y',
    data:[
      {
        id:5,
        content:5,
        selected:false
      },
      {
        id:6,
        content:6,
        selected:false
      },
      {
        id:7,
        content:7,
        selected:false
      },
      {
        id:8,
        content:8,
        selected:false
      }
    ]
  },
  {
    row:'z',
    data:[
      {
        id:9,
        content:9,
        selected:false
      },
      {
        id:10,
        content:10,
        selected:false
      },
      {
        id:11,
        content:11,
        selected:false
      },
      {
        id:12,
        content:12,
        selected:false
      }
    ]
  }
 ]
 const state = reactive({
  tableData:data,
  selectedData:null,
  selectedAreaData:[]
 })
 watch(()=>state.selectedData,(newValue)=>{
  console.log('selecd',newValue)
 })
 watch(()=>state.selectedAreaData,(newValue)=>{
  console.log('selectedAreaData',newValue)
 })
</script>


<style scoped>
table{
  width: 800px;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: center;
  user-select: none;
}
td,th{
     position: relative;
     height: 33px;
     cursor: pointer;
     box-sizing: border-box; 
}
td.selected{
  background-color: orange;
}
</style>
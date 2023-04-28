const vTableSelect = {
    mounted (el,bindings) {
        vTableSelect.el = el;
        bindEvent(bindings.value)
    }
}
function bindEvent(state){
    const {el} = vTableSelect
    el.addEventListener('click',handleTDClick.bind(el,state),false)
    el.addEventListener('dblclick',handleTDDblclick.bind(el,state),false)
    el.addEventListener('mouseDown',handleTDMouseDown.bind(el,state),false)
    window.addEventListener('click',handleWindowClick.bind(el,state),false)
}
function handleTDClick(...[state,e]){
    publicInitial(state,e)
    const {target} = e
    console.log('单机')
    if(target.tagName==='TD'){
       const {rowIndex,columnIndex} = getRowAndColumn(target)
      const selectedData = getTargetData(state.tableData,rowIndex).data[columnIndex]
      selectedData.selected = true
      state.selectedData = selectedData
     }
}

function handleTDDblclick(...[state,e]){
    console.log('双击')
    publicInitial(state,e)
    const {target} = e
    if(target.tagName==='TD'){
      const {rowIndex,columnIndex} = getRowAndColumn(target)
      const selectedData = getTargetData(state.tableData,rowIndex).data[columnIndex]
      state.selectedData = selectedData
      this.oInput = createInput(target,state.tableData,rowIndex,columnIndex)
     }
}
function handleTDMouseDown() {
    publicInitial(state,e)  

}
function handleWindowClick(...[state,e]){
    console.log(this.oInput.value,'this.oInputlll')
    publicInitial(state,e)
    state.selectedData.content = this.oInput.value
}
function getRowAndColumn(target){
    const {dataset} = target
    return {
        rowIndex:Number(dataset.row),
        columnIndex:Number(dataset.column)
    }
}
function publicInitial(state,e){
    if(state.selectedData){
        state.selectedData.selected = false
    }
    e.stopPropagation()
}
function getTargetData(tableData,rowIndex,){
   return tableData.find((row,_rowIndex)=> _rowIndex===rowIndex)
}
function createInput(target,selectedData,rowIndex,columnIndex){
    const { content } = getTargetData(selectedData,rowIndex).data[columnIndex]
    const oInput = document.createElement('input');
    oInput.type = 'text';
    oInput.value =content;
    oInput.onfocus = oInput.select
    target.appendChild(oInput)
    oInput.focus()
    oInput.style.cssText= `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    text-align:center;
    `
    return oInput
}
export default  vTableSelect
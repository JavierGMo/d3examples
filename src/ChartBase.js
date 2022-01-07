import { select } from 'd3';

export default class ChartBase{
    constructor(
        idContainer='my-div',
        elementToCreate='svg',
        data=[],
        dimensions={
            width: 450,
            height: 450
        }
    ){
        this.dimensions = dimensions;
        this.containerForRender = select(`#${idContainer}`)
                                    .append(elementToCreate)
                                    .attr('width', this.width)
                                    .attr('height', this.height);
        
        this.data = data;

        this.width = dimensions.width;
        this.height = dimensions.height;
        this.margin = dimensions.margin;

    }

    addAttrChartBase(nameAttr='', valueAttr=0){
        if(nameAttr === '' || valueAttr === 0)
            throw new Error('El nombre y el valor del atributo son requeridos');
        try {
            this.containerForRender.attr(nameAttr, valueAttr);    
        } catch (error) {
            console.error(error);
        }
        
    }
    appendChartBase(nameElementToAppend=''){
        if(nameElementToAppend === '')
            throw new Error('El elemento a agregar es requerido');
        try {
            
            this.containerForRender.append(nameElementToAppend);
        } catch (error) {
            console.error(error);
        }

    }
}
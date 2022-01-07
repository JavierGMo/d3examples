
import { pie as chartPie, scaleOrdinal, entries, arc } from 'd3';
import ChartBase from './ChartBase';

export default class ChartPie extends ChartBase {

    constructor(radius= 0){
        super();
        
        this.radius = radius===0
                            ?Math.min(this.width, this.height)/2-this.margin
                            :radius;

        this.containerForRender.append('g')
                                .attr('transform', `translate(${this.dimensions.width/2}, ${this.dimensions.height/2})`);
    }

    addColors(colorsChart=['#98abc5', '#8a89a6', '#7b6888']){
        const pie = scaleOrdinal()
                    .domain(this.data)
                    .range(colorsChart);
    }
    

    render() {
        const pie = chartPie()
                    .value(d=>d.value);
        const dataReady = chartPie(entries(this.data));

        this.containerForRender.selectAll('whatever')
                                .data(dataReady)
                                .enter()
                                .append('path')
                                .attr('d', arc(this.radius).innerRadius(100).outerRadius(this.radius))
                                .attr('fill', d =>(color(d.data.key)))
                                .attr("stroke", "black")
                                .style("stroke-width", "2px")
                                .style("opacity", 0.7);
    }
}
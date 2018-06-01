
declare const d3;

/* Create the initial SVG and working space */
const svg = d3.select("svg").on("touchmove mousemove", moved);
const width = +svg.attr("width");
const height = +svg.attr("height");

/* Calculate how many sites to display and generate them */
const sites = d3.range(300)
  .map((d) => { return [Math.random() * width, Math.random() * height]; });

/* Initialise the D3 Voroni */
const voronoi = d3.voronoi()
  .extent([[-1, -1], [width + 1, height + 1]]);

/* Add Polygon for each site */
let polygon = svg.append("g")
  .attr("class", "polygons")
  .selectAll("path")
  .data(voronoi.polygons(sites))
  .enter().append("path")
  .call(redrawPolygon);

/* Add Lines for each polygon */
let link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(voronoi.links(sites))
  .enter().append("line")
  .call(redrawLink);

/* Add the actual Site */
let site = svg.append("g")
  .attr("class", "sites")
  .selectAll("circle")
  .data(sites)
  .enter().append("circle")
  .attr("r", 2.5)
  .call(redrawSite);

/**
 * Redraw the appropriate part on mousemove
 */
function moved() {
  sites[0] = d3.mouse(this);
  redraw();
}

/**
 * Triggers the render methods for polygons, lins and sites
 */
function redraw() {
  const diagram = voronoi(sites);
  polygon = polygon.data(diagram.polygons()).call(redrawPolygon);
  link = link.data(diagram.links()), link.exit().remove();
  link = link.enter().append("line").merge(link).call(redrawLink);
  site = site.data(sites).call(redrawSite);
}

/**
 * Renders a given polygon
 * @param polygon 
 */
function redrawPolygon(polygon) {
  polygon
    .attr("d", (d) => { return d ? "M" + d.join("L") + "Z" : null; })
    .attr('class', (d, i) => { return 'v-' + i % 9; });
}

/**
 * Sets the dimensions and positions of the links between sites
 * @param link 
 */
function redrawLink(link) {
  link
    .attr("x1", (d) => { return d.source[0]; })
    .attr("y1", (d) => { return d.source[1]; })
    .attr("x2", (d) => { return d.target[0]; })
    .attr("y2", (d) => { return d.target[1]; });
}

/**
 * Sets dimensions and positions of each given site
 * @param site 
 */
function redrawSite(site) {
  site
    .attr("cx", (d) => { return d[0]; })
    .attr("cy", (d) => { return d[1]; });
}

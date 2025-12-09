///NOTE: this code assumes that there is only M, l and z commands in the path data
///      this code assumes that M defines the starting ABSOLUTE position and l defines all the RELATIVE positions

console.log("Hello Geocenter");

window.onload = () => {
    // Get the path data
    path = document.getElementById("country_path");
    d = path.getAttribute("d");
    parts = d.split(/(?=[Mlz])/);
    console.log(parts);

    // Get the starting absolute location
    startLocation = parts[0].split(/[M ]+/)
    startLocation = startLocation.slice(1); // Remove the first empty element
    console.log("Absolute location:", startLocation);
    
    startCoordinates = [];
    startLocation.forEach(element => {
        startCoordinates.push(parseFloat(element));
    });
    console.log("Absolute coordinates:", startCoordinates);

    absX = startCoordinates[0];
    absY = startCoordinates[1];

    // Get the relative locations
    relCoordinates = parts[1].match(/-?\d+\.?\d*/g)
    console.log("Relative location:", relCoordinates);
    

    // Convert relative to absolute coordinates
    absCoordinates = [];
    for (i=0;i<relCoordinates.length; i+=2){
        absX += parseFloat(relCoordinates[i]);
        absY += parseFloat(relCoordinates[i+1]);
        absCoordinates.push(absX);
        absCoordinates.push(absY);

    }
    console.log("Absolute coordinates:", absCoordinates);

    // Calculate area
    function calculateArea(coords) {
        sum = 0;
        for (i = 0; i < coords.length; i += 2) {
            x1 = coords[i];
            y1 = coords[i + 1];
            x2 = coords[i + 2];
            y2 = coords[i + 3];
            if (i == coords.length - 2) { // Wrap around for the last point
                x2 = coords[0];
                y2 = coords[1];
            }
            sum += (x1 * y2) - (x2 * y1);
        }
        area = Math.abs(sum / 2);
        return area;
    }

            console.log(i);

    console.log("Area:", calculateArea(absCoordinates));

    // Calculate centroid
    function calculateCentroid(coords) {
        Cx = 0;
        Cy = 0;
        sumX = 0;
        sumY = 0;
        a = calculateArea(coords);

        for (i = 0;i<coords.length;i+=2){
            x1 = coords[i];
            y1 = coords[i + 1];
            x2 = coords[i + 2];
            y2 = coords[i + 3];
            if (i == coords.length - 2) { // Wrap around for the last point
                x2 = coords[0];
                y2 = coords[1];
            }

            crossProduct = (x1 * y2) - (x2 * y1);
            sumX += (x1 + x2) * crossProduct;
            sumY += (y1 + y2) * crossProduct;

        }

        Cx = sumX / (6 * a);
        Cy = sumY / (6 * a);

        return [Cx, Cy];
    }

    console.log("Centroid:", calculateCentroid(absCoordinates));


    centroid = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    centroid.setAttribute("cx", calculateCentroid(absCoordinates)[0]);
    centroid.setAttribute("cy", calculateCentroid(absCoordinates)[1]);
    centroid.setAttribute("r", 5);
    centroid.setAttribute("fill", "red");
    document.getElementById("label_points").appendChild(centroid);
}
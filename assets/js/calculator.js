$(document).ready(function () {
    $("#calculate").click(function () {
        let root1, root2;

        // definer og hent værdier af a, b og c
        let a = $("#valueA").val();
        let b = $("#valueB").val();
        let c = $("#valueC").val();

        // definer diskriminanten
        let discriminant = b * b - 4 * a * c;

        // hvis diskriminanten er større end 0, så finder vi de to faktorer
        if (discriminant < 0) {
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            displayResult(root1, root2);
            
        } else if (discriminant == 0) { // hvis diskriminanten er lig med 0, så finder vi kun en faktor
            root1 = root2 = -b / (2 * a);
            displayResult(root1, root2);
        } else { // hvis diskriminanten er mindre end 0, så beregner vi løsningerne ved brug af formel 3 og 4.
            let realPlan = (-b / (2 * a)).toFixed(2);
            let imaginaryPart = (Math.sqrt(discriminant) / (2 * a)).toFixed(2);

            x1 = parseFloat(realPlan) + parseFloat(imaginaryPart);
            x2 = parseFloat(realPlan) - parseFloat(imaginaryPart);
            
            displayResult(x1, x2);
        }
    });

    // vis resultatet
    function displayResult(root1, root2) {
        if (isNaN(root1) || isNaN(root2)) {
            $("#result").html("<p class='text-danger'>Enten er dette ikke en andengradsligning ellers findes der ingen løsning på dette.</p>");
        } else {
            $("#result").html("<p class='text-success'>X1: " + root1 + "</p><p class='text-success'>X2: " + root2 + "</p>");
        }
    }

    // nulstil
    $("#reset").click(function () {
        $("#valueA").val("");
        $("#valueB").val("");
        $("#valueC").val("");
        $("#result").html("");
    });
});
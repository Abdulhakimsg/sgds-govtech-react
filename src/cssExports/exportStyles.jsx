var tinycolor = require("tinycolor2");

export function getStyles() {

    //button
    var primaryButtonStyle = ".sgds-button.is-primary \r\n { \r\n\t background-color: var(--primary-color); \r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n\t opacity: 0.5; \r\n } \r\n";
    var primaryButtonStyleHover = ".sgds-button.is-primary:hover \r\n { \r\n\t background-color: var(--primary-color-darken); \r\n\t color: var(--white); \r\n } \r\n";

    var outlinedButtonStyle = ".sgds-button.is-outlined \r\n { \r\n\tborder-color: var(--primary-color); \r\n\t color: var(--white); \r\n } \r\n";
    var outlinedButtonStyleHover = ".sgds-button.is-outlined:hover \r\n { \r\n\t border-color: var(--primary-color-darken); \r\n\t color: var(--white); \r\n } \r\n\t ";

    var roundedButtonStyle = ".sgds-button.is-rounded \r\n { \r\n\tbackground-color: var(--primary-color); \r\n\t border-radius:29px;  \r\n } \r\n";
    var roundedButtonStyleHover = ".sgds-button.is-rounded:hover \r\n { \r\n\t background-color: var(--primary-color-darken); \r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n\t ";

    var disabledButtonStyle = ".sgds-button.is-rounded \r\n { \r\n\tbackground-color: var(--primary-color); \r\n\t border-radius:29px;  \r\n } \r\n";
    var roundedButtonStyleHover = ".sgds-button.is-rounded:hover \r\n { \r\n\t background-color: var(--primary-color-darken); \r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n\t ";






    var style = primaryButtonStyle + primaryButtonStyleHover + outlinedButtonStyle + outlinedButtonStyleHover + roundedButtonStyle + roundedButtonStyleHover;
    return style;
}


 export function sassColor(colorHexValue, percentage)
 {
    var color = colorHexValue.toString().substring(1);

    if(color.length === 6 && percentage !== ""){
        
        var percent = percentage           
        var t = tinycolor(color);
        var hsl = t.toHsl();
        var colorH = hsl["h"];
        var colorS = hsl["s"] * 100;
        var colorL = hsl["l"] * 100; 
        
        //var lightHex, darkHex, satHex, desHex

        var darkHex;
         
        for (var i = 0; i < 100; i = i + percent)
        {
          
        //   var lighten = colorL + i;    
        //   var lightColor = tinycolor("hsl(" + colorH + ", " + colorS + "%, " + lighten + "%)");
        //   lightHex = lightColor.toHexString(); 
          
          var darken = colorL - i;    
          var darkColor = tinycolor("hsl(" + colorH + ", " + colorS + "%, " + darken + "%)");
          darkHex = darkColor.toHexString(); 
          
        //   var saturate = colorS + i;    
        //   var satColor = tinycolor("hsl(" + colorH + ", " + saturate + "%, " + colorL + "%)");
        //   satHex = satColor.toHexString(); 
          
        //   var desaturate = colorS - i;    
        //   var desColor = tinycolor("hsl(" + colorH + ", " + desaturate + "%, " + colorL + "%)");
        //   desHex = desColor.toHexString();
        
       }

        //   console.log("Light:" + lightHex)
        //   console.log("Saturate:" + satHex)
        //   console.log("DeSaturate:" + desHex)

        return darkHex;
    }
}
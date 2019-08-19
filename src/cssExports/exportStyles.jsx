var tinycolor = require("tinycolor2");

export function getStyles() {

    //main navigation
    var mainNavigation = ".navbar-item.is-tab:hover \r\n { \r\n\t border-bottom-color: var(--primary-color); \r\n } \r\n ";
    var mainNavigationActive = ".navbar-item.is-tab.is-active\r\n { \r\n\t border-bottom-color: var(--primary-color);\r\n } \r\n";
    //main navigation dropdown
    var mainNavigationDropdown = ".navbar-dropdown a.navbar-item:hover\r\n{ \r\n\t color: var(--primary-color);\r\n }\r\n";
    var mainNavigationDropdownActive = ".navbar-dropdown a.navbar-item.is-active\r\n{ \r\n\t color: var(--primary-color);\r\n }\r\n";
    //sidenav menu list
    var sidenavMenuList = ".sgds-menu-list a.is-active:hover\r\n{\r\n\t color: var(--primary-color);\r\n\t border-color:var(--primary-color);\r\n}\r\n";
    var sidenavMenuListActive = ".sgds-menu-list a.is-active\r\n{\r\n\t color: var(--primary-color);\r\n\t border-color:var(--primary-color);\r\n}\r\n";

    //accordion

    //breadcrumb

    //button
    var primaryButtonStyle = ".sgds-button.is-primary \r\n { \r\n\t background-color: var(--primary-color); \r\n\t border-color: transparent; \r\n\t color: var(--white);\r\n } \r\n";
    var primaryButtonStyleHover = ".sgds-button.is-primary:hover \r\n { \r\n\t background-color: var(--primary-color-darken);\r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n";

    var outlinedButtonStyle = ".sgds-button.is-outlined \r\n { \r\n\t background-color: transparent;\r\n\t border-color: var(--primary-color); \r\n\t color: var(--primary-color); \r\n } \r\n";
    var outlinedButtonStyleHover = ".sgds-button.is-outlined:hover \r\n { \r\n\t background-color: var(--primary-color-darken);\r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n ";

    var roundedButtonStyle = ".sgds-button.is-rounded \r\n { \r\n\t background-color: var(--primary-color); \r\n\t border-radius:29px;  \r\n } \r\n";
    var roundedButtonStyleHover = ".sgds-button.is-rounded:hover \r\n { \r\n\t background-color: var(--primary-color-darken); \r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n ";

    var disabledButtonStyle = ".sgds-button.disabled \r\n { \r\n\t background-color: var(--color); \r\n\t border-color: transparent;\r\n\t color: var(--white);\r\n\t opacity:0.5; \r\n } \r\n";
    
    var secondaryButtonStyle = ".sgds-button.is-secondary \r\n { \r\n\t background-color: var(--secondary-color); \r\n\t border-color: transparent; \r\n\t color: var(--white);\r\n } \r\n";
    var secondaryButtonStyleHover = ".sgds-button.is-secondary:hover \r\n { \r\n\t background-color: var(--secondary-color-darken);\r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n";
    
    var infoButtonStyle = ".sgds-button.is-info \r\n { \r\n\t background-color: var(--info-color); \r\n\t border-color: transparent; \r\n\t color: var(--white);\r\n } \r\n";
    var infoButtonStyleHover = ".sgds-button.is-info:hover \r\n { \r\n\t background-color: var(--info-color-darken);\r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n";
    
    var successButtonStyle = ".sgds-button.is-success \r\n { \r\n\t background-color: var(--success-color); \r\n\t border-color: transparent; \r\n\t color: var(--white);\r\n } \r\n";
    var successButtonStyleHover = ".sgds-button.is-success:hover \r\n { \r\n\t background-color: var(--success-color-darken);\r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n";
    
    var warningButtonStyle = ".sgds-button.is-warning \r\n { \r\n\t background-color: var(--warning-color); \r\n\t border-color: transparent; \r\n\t color: var(--white);\r\n } \r\n";
    var warningButtonStyleHover = ".sgds-button.is-warning:hover \r\n { \r\n\t background-color: var(--warning-color-darken);\r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n";
    
    var dangerButtonStyle = ".sgds-button.is-danger \r\n { \r\n\t background-color: var(--danger-color); \r\n\t border-color: transparent; \r\n\t color: var(--white);\r\n } \r\n";
    var dangerButtonStyleHover = ".sgds-button.is-danger:hover \r\n { \r\n\t background-color: var(--danger-color-darken);\r\n\t border-color: transparent; \r\n\t color: var(--white); \r\n } \r\n";

    var sgdsFont = ".sgds-button\r\n{ \r\n\t font-size:7;\r\n }\r\n";
    var sgdsFontSmall = ".sgds-button.is-small\r\n{ \r\n\t font-size:8;\r\n }\r\n";
    var sgdsFontMedium = ".sgds-button.is-medium\r\n{ \r\n\t font-size:6;\r\n }\r\n";
    var sgdsFontLarge = ".sgds-button.is-large\r\n{ \r\n\t font-size:5;\r\n }\r\n";
    // callout

    // card

    //Dropdown menu

    // Form

    var inputForm = "input \r\n{\r\n\t border-color:var(--grey-light-color);\r\n}\r\n";
    var inputprimaryForm = "input.is-primary\r\n{\r\n\t border-color:var(--primary-color);\r\n}\r\n"; 
    var inputsecondaryForm = "input.is-secondary\r\n{\r\n\t border-color:var(--secondary-color);\r\n}\r\n"; 
    var inputinfoForm = "input.is-info\r\n{\r\n\t border-color:var(--info-color);\r\n}\r\n"; 
    var inputsuccessForm = "input.is-success\r\n{\r\n\t border-color:var(--success-color);\r\n}\r\n"; 
    var inputwarningForm = "input.is-warning\r\n{\r\n\t border-color:var(--warning-color);\r\n}\r\n"; 
    var inputdangerForm = "input.is-danger\r\n{\r\n\t border-color:var(--danger-color);\r\n}\r\n"; 

    //var validationForm = "p.help\r\n{\r\n\t color:var(--grey-light-color);\r\n}\r\n";
    var validationprimaryForm = "p.help.is-primary\r\n{\r\n\t color:var(--primary-color);\r\n}\r\n";
    var validationsecondaryForm = "p.help.is-secondary\r\n{\r\n\t color:var(--secondary-color);\r\n}\r\n";
    var validationinfoForm = "p.help.is-info\r\n{\r\n\t color:var(--info-color);\r\n}\r\n"; 
    var validationsuccessForm = "p.help.is-success\r\n{\r\n\t color:var(--success-color);\r\n}\r\n"; 
    var validationwarningForm = "p.help.is-warning\r\n{\r\n\t color:var(--warning-color);\r\n}\r\n"; 
    var validationdangerForm = "p.help.is-danger\r\n{\r\n\t color:var(--danger-color);\r\n}\r\n"; 

    var textareaForm = ".textarea \r\n{\r\n\t border-color:var(--grey-light-color);\r\n}\r\n";
    var textareaprimaryForm = ".textarea.is-primary\r\n{\r\n\t border-color:var(--primary-color);\r\n}\r\n"; 
    var textareasecondaryForm = ".textarea.is-secondary\r\n{\r\n\t border-color:var(--secondary-color);\r\n}\r\n"; 
    var textareainfoForm = ".textarea.is-info\r\n{\r\n\t border-color:var(--info-color);\r\n}\r\n"; 
    var textareasuccessForm = ".textarea.is-success\r\n{\r\n\t border-color:var(--success-color);\r\n}\r\n"; 
    var textareawarningForm = ".textarea.is-warning\r\n{\r\n\t border-color:var(--warning-color);\r\n}\r\n"; 
    var textareadangerForm = ".textarea.is-danger\r\n{\r\n\t border-color:var(--danger-color);\r\n}\r\n"; 

    //hero
    var primaryHero = ".has-background-primary\r\n{\r\n\t background-color:var(--primary-color);\r\n}\r\n"; 
    var secondaryHero = ".has-background-secondary\r\n{\r\n\t background-color:var(--secondary-color);\r\n}\r\n"; 
    var infoHero = ".has-background-info\r\n{\r\n\t background-color:var(--info-color);\r\n}\r\n"; 
    var successHero = ".has-background-success\r\n{\r\n\t background-color:var(--success-color);\r\n}\r\n"; 
    var warningHero = ".has-background-warning\r\n{\r\n\t background-color:var(--warning-color);\r\n}\r\n"; 
    var dangerHero = ".has-background-danger\r\n{\r\n\t background-color:var(--danger-color);\r\n}\r\n";

    //notification

    var Notification = ".sgds-notification\r\n{\r\n\t background-color:var(--white-ter-color);\r\n}\r\n";
    var PrimaryNotification = ".sgds-notification.is-primary\r\n{\r\n\t background-color:var(--primary-color);\r\n}\r\n";
    var PrimarypNotification = ".sgds-notification.is-primary  p\r\n{\r\n\t color:var(--grey-dark);\r\n}\r\n";
    var SecondaryNotification = ".sgds-notification.is-secondary\r\n{\r\n\t background-color:var(--secondary-color);\r\n}\r\n";
    var SecondarypNotification = ".sgds-notification.is-secondary  p\r\n{\r\n\t color:var(--grey-dark);\r\n}\r\n";
    var infoNotification = ".sgds-notification.is-info\r\n{\r\n\t background-color:var(--info-color);\r\n}\r\n";
    var infopNotification = ".sgds-notification.is-info  p\r\n{\r\n\t color:var(--white);\r\n}\r\n";
    var successNotification = ".sgds-notification.is-success\r\n{\r\n\t background-color:var(--success-color);\r\n}\r\n";
    var successpNotification = ".sgds-notification.is-success  p\r\n{\r\n\t color:var(--white);\r\n}\r\n";
    var warningNotification = ".sgds-notification.is-warning\r\n{\r\n\t background-color:var(--warning-color);\r\n}\r\n";
    var warningpNotification = ".sgds-notification.is-warning  p\r\n{\r\n\t color:var(--white);\r\n}\r\n";
    var dangerNotification = ".sgds-notification.is-danger\r\n{\r\n\t background-color:var(--danger-color);\r\n}\r\n";
    var dangerpNotification = ".sgds-notification.is-danger  p\r\n{\r\n\t color:var(--white);\r\n}\r\n";

    var Toastnotification = ".sgds-notification.is-toast\r\n{\r\n\t background-color:var(--white-ter-color);\r\n}\r\n";
    var PrimaryToastNotification = ".sgds-notification.is-toast.is-primary\r\n{\r\n\t background-color:var(--primary-color);\r\n}\r\n";
    var PrimarypToastNotification = ".sgds-notification.is-toast.is-primary p\r\n{\r\n\t color:var(--grey-dark);\r\n}\r\n";
    var SecondaryToastNotification = ".sgds-notification.is-toast.is-secondary\r\n{\r\n\t background-color:var(--secondary-color);\r\n}\r\n";
    var SecondarypToastNotification = ".sgds-notification.is-toast.is-secondary  p\r\n{\r\n\t color:var(--grey-dark);\r\n}\r\n";
    var infoToastNotification = ".sgds-notification.is-toast.is-info\r\n{\r\n\t background-color:var(--info-color);\r\n}\r\n";
    var infopToastNotification = ".sgds-notification.is-toast.is-info p\r\n{\r\n\t color:var(--white);\r\n}\r\n";
    var successToastNotification = ".sgds-notification.is-toast.is-success\r\n{\r\n\t background-color:var(--success-color);\r\n}\r\n";
    var successpToastNotification = ".sgds-notification.is-toast.is-success p\r\n{\r\n\t color:var(--white);\r\n}\r\n";
    var warningToastNotification = ".sgds-notification.is-toast.is-warning\r\n{\r\n\t background-color:var(--warning-color);\r\n}\r\n";
    var warningpToastNotification = ".sgds-notification.is-toast.is-warning p\r\n{\r\n\t color:var(--white);\r\n}\r\n";
    var dangerToastNotification = ".sgds-notification.is-toast.is-danger\r\n{\r\n\t background-color:var(--danger-color);\r\n}\r\n";
    var dangerpToastNotification = ".sgds-notification.is-toast.is-danger p\r\n{\r\n\t color:var(--white);\r\n}\r\n";

    //tab

    //table

    //text

    var style = primaryButtonStyle + primaryButtonStyleHover + outlinedButtonStyle + outlinedButtonStyleHover + roundedButtonStyle + roundedButtonStyleHover + mainNavigation + 
    mainNavigationActive + mainNavigationDropdown + mainNavigationDropdownActive + sidenavMenuList + disabledButtonStyle + secondaryButtonStyle + secondaryButtonStyleHover + 
    infoButtonStyle +infoButtonStyleHover + successButtonStyle + successButtonStyleHover + warningButtonStyle + warningButtonStyleHover + dangerButtonStyle + dangerButtonStyleHover + sgdsFont+
    sgdsFontSmall + sgdsFontMedium + sgdsFontLarge + sidenavMenuListActive + inputForm + inputsecondaryForm + inputsuccessForm + inputwarningForm + inputdangerForm + inputprimaryForm + inputinfoForm + inputsecondaryForm +
    validationprimaryForm + validationsecondaryForm + validationinfoForm + validationdangerForm + validationsuccessForm + validationwarningForm + textareaForm +
    textareainfoForm + textareadangerForm + textareawarningForm + textareaprimaryForm + textareasecondaryForm +textareasuccessForm +primaryHero + secondaryHero + infoHero + successHero + warningHero + dangerHero +
    Notification + PrimarypNotification + SecondaryNotification + infoNotification + successNotification + successpNotification + infopNotification + PrimaryNotification + SecondarypNotification + dangerNotification + dangerpNotification + warningNotification + warningpNotification +
    Toastnotification + PrimaryToastNotification + PrimarypToastNotification + SecondaryToastNotification + SecondarypToastNotification + infopToastNotification + infoToastNotification + successToastNotification + successpToastNotification + warningToastNotification + warningpToastNotification + dangerToastNotification + dangerpToastNotification ;
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
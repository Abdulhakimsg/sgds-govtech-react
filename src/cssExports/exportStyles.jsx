
export function getStyles() {

    var primaryButtonStyle = ".sgds-button.is-primary \r\n { \r\n\t background-color: var(--primary-color); \r\n\t color: var(--white); \r\n } \r\n";
    var primaryButtonStyleHover = ".sgds-button.is-primary:hover \r\n { \r\n\t background-color: var(--primary-color-2.5%); \r\n\t color: var(--white); \r\n } \r\n";

    var outlinedButtonStyle = ".sgds-button.is-outlined \r\n { \r\n\tborder-color: var(--primary-color); \r\n\t color: var(--white); \r\n } \r\n";
    var outlinedButtonStyleHover = ".sgds-button.is-outlined:hover \r\n { \r\n\t border-color: var(--primary-color-2.5%); \r\n\t color: var(--white); \r\n } \r\n\t ";

    

    var style = primaryButtonStyle + primaryButtonStyleHover + outlinedButtonStyle + outlinedButtonStyleHover;

    return style;
}
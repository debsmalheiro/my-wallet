// Component
const formatDate = (date: string): string => {
    const dateFormatted = new Date(date);

    const day = dateFormatted.getDate() > 9 
        ? dateFormatted.getDate() 
        : `0${dateFormatted.getDate()}`
    ;

    /* O mês começa a contar do 0 | JANEIRO = 0 */
    const month = dateFormatted.getMonth() + 1 > 9
        ? dateFormatted.getMonth() + 1
        : `0${dateFormatted.getMonth() + 1}`
    ; 

    const year = dateFormatted.getFullYear();

    return `${day}/${month}/${year}`;
};

// Export module
export default formatDate;
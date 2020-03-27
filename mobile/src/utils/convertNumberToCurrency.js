export default function convertNumberToCurrency(number) {
    if (number) {
        return Intl.NumberFormat('pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }).format(number);
    }

    return null;
}
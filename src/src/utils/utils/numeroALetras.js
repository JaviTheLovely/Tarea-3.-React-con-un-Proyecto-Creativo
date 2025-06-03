function numeroALetras(num) {
    const unidades = ['','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
    const especiales = ['diez','once','doce','trece','catorce','quince'];
    const decenas = ['','','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
    const centenas = ['','cien','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];
  
    if (num === 1000) return 'mil';
    if (num <= 9) return unidades[num];
    if (num <= 15) return especiales[num - 10];
    if (num < 100) {
      if (num < 30 && num % 10 !== 0) return 'veinti' + unidades[num % 10];
      return decenas[Math.floor(num / 10)] + (num % 10 === 0 ? '' : ' y ' + unidades[num % 10]);
    }
    if (num < 1000) {
      const resto = num % 100;
      const cent = Math.floor(num / 100);
      return (cent === 1 && resto !== 0 ? 'ciento' : centenas[cent]) + (resto !== 0 ? ' ' + numeroALetras(resto) : '');
    }
  
    return '';
  }
  
  export default numeroALetras;
  
class ColorFactory{

  static convertRGBtoHex(red: any, green: any, blue: any): string{

    const colorToHex = (color: any) => {
      var hexadecimal = color.toString(16);
      return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }

    const hexColor = '0x' + colorToHex(red) + colorToHex(green) + colorToHex(blue);

    return hexColor
  }

}

export default ColorFactory
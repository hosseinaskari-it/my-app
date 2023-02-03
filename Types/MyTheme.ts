

export interface Transitions {
 
    easing: {
      easeInOut:string 
      easeOut: string
      easeIn: string
      sharp: string
    };
}


export interface Duration {
  shortest: number
  shorter: number
  short: number
  standard: number
  complex: number
  enteringScreen: number
  leavingScreen: number
}

export interface Shape {
    borderRadius: number
  }   
   
export interface ZIndex {
  mobileStepper: number
  speedDial: number
  appBar: number
  drawer: number
  modal: number
  snackbar: number
  tooltip: number
}

 export interface Typography {
  fontWeightLight: number
  fontWeightRegular: number
  fontWeightMedium: number
  fontWeightBold: number
 }

 export interface Size {
  smallest: string
  smaller: string
  small: string
  medium: string
  large: string
  larger: string
  largest: string
 }

export interface MediaQueries {
  smallest: string
  smaller: string
  small: string
  medium: string
  large: string
  larger: string
  largest: string
}
export interface Custom {
  layout: {
    appBarHeight: number
  };
}
  
export interface Dark  {
    imagefilter: string
    checked:boolean
    palettebackgrounddefault: string
    palettetextprimary: string
    palettetextsecondary: string
    palettetextdisabled: string
    palettedivider: string
    paletteactionactive: string
    paletteactionhover: string
    paletteactionhoveropacity: string
    paletteactionselected: string
    paletteactiondisabled: string
    paletteactiondisabledbackground: string
    palettebackgroundpaper: string
    paletteprimarymain: string
    paletteprimarymainrgb: string
    paletteprimarydark: string
    paletteprimarylight: string
    paletteprimarycontrasttext: string
    palettesecondarymain: string
    palettesecondarymainrgb: string
    palettesecondarydark: string
    palettesecondarylight: string
    palettesecondarycontrasttext: string
    buttontogglefirstchild: string
    buttontogglelastchild: string
    palettewarningmain: string
    palettewarningdark: string
    palettewarninglight: string
    palettewarningcontrasttext: string
    backgroundblendgradient:string
  };
  
  export interface Light {
    checked:boolean
    palettebackgrounddefault: string
    palettetextprimary: string
    palettetextsecondary: string
    palettetextdisabled: string
    palettedivider: string
    paletteactionactive: string
    paletteactionhover: string
    paletteactionhoveropacity: string
    paletteactionselected: string
    paletteactiondisabled: string
    paletteactiondisabledbackground: string
    buttontogglefirstchild: string
    buttontogglelastchild: string
    palettebackgroundpaper: string
    paletteprimarymain: string
    paletteprimarymainrgb: string
    paletteprimarydark: string
    paletteprimarylight: string
    paletteprimarycontrasttext: string
    palettesecondarymain: string
    palettesecondarymainrgb: string
    palettesecondarydark: string
    palettesecondarylight: string
    palettesecondarycontrasttext: string
    palettewarningmain: string
    palettewarningdark: string
    palettewarninglight: string
    palettewarningcontrasttext: string
    backgroundblendgradient:string
     
  };

  export interface ThemeType extends Light, Dark {
    transitions: Transitions
    duration: Duration
    shape:Shape
    zIndex:ZIndex
    typography:Typography
    size:Size
    mediaQueries:MediaQueries
    custom:Custom
  }
export class Sheet {

  static empty = () => {
    return new Sheet([], 1)
  }

  static from_bra = (bra: Bra) => {
    let staves = bra.split('\n\n').map(Staff.from_bra)

    return new Sheet(staves, 1)
  }

  get bra() {
    return this.staves.map(_ => _.bra).join('\n\n')
  }

  add_staff(clef: Clef) {
    this.staves.push(new Staff(clef))
  }

  constructor(readonly staves: Array<Staff>, 
              readonly page: number) {
  }

}


export class Staff {

  static from_bra = (bra: Bra) => {
    let clef = bra

    return new Staff(clef)
  }

  get bra() {
    return [this.clef].join(' ')
  }

  constructor(readonly clef: Clef) {
  }


}

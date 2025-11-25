
export class Client2 { 
    nombre?: string | undefined | null;
    apellido?: string | undefined | null;
    razonSocial?: string | undefined | null;
    cuit?: string | undefined | null;
    fechaNacimiento?: string | undefined | null;
    telefonoCelular?: string | undefined | null;
    email?: string | undefined | null;
    id?: number | undefined | null;
constructor(init: Partial<Client2> = {}){
    this.nombre = null;
    this.apellido = null;
    this.razonSocial = null;
    this.cuit = null;
    this.fechaNacimiento = null;
    this.telefonoCelular = null;
    this.email = null;
    this.id = null;
    const keys = (Object.keys(init) as (keyof Client2)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}



export class Client { 
    nombre?: string | undefined | null;
    apellido?: string | undefined | null;
    razonSocial?: string | undefined | null;
    cuit?: string | undefined | null;
    fechaNacimiento?: string | undefined | null;
    telefonoCelular?: string | undefined | null;
    email?: string | undefined | null;
    id?: number | undefined | null;
constructor(init: Partial<Client> = {}){
    this.nombre = null;
    this.apellido = null;
    this.razonSocial = null;
    this.cuit = null;
    this.fechaNacimiento = null;
    this.telefonoCelular = null;
    this.email = null;
    this.id = 0;
    const keys = (Object.keys(init) as (keyof Client)[])
    .filter(k => this[k] !== init[k]);
    if(keys.length > 0){
        keys.forEach(k => {
            //@ts-ignore
            this[k] = init[k];
        });
    }
}
}


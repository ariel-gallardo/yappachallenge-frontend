
export class ClientUpdate { 
    nombre?: string | undefined | null;
    apellido?: string | undefined | null;
    razonSocial?: string | undefined | null;
    cuit?: string | undefined | null;
    fechaNacimiento?: string | undefined | null;
    telefonoCelular?: string | undefined | null;
    email?: string | undefined | null;
    id?: number | undefined | null;
constructor(init: Partial<ClientUpdate> = {}){
    Object.assign(this, init);
    this.nombre = null;
    this.apellido = null;
    this.razonSocial = null;
    this.cuit = null;
    this.fechaNacimiento = null;
    this.telefonoCelular = null;
    this.email = null;
    this.id = null;
}
	public IsEmpty(){return (this.nombre || this.apellido || this.razonSocial || this.cuit || this.fechaNacimiento || this.telefonoCelular || this.email || this.id);}
}


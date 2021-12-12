<template lang="ES">
    <div>
        <h1>Registrar Pacientes</h1>
        <form>
            <p>
                Nombre: <input type="text" name="nombre" placeholder="Nombre" class="form-control"/>    
            </p>
            <p>
                Apellido: <input type="text" name="apellido" placeholder="apellido" class="form-control"/>
            </p>
            <p>
                Contreseña: <input type="password" name="contreseña1" placeholder="Contreseña" class="form-control"/>
            </p>
            <p>
                Confirmar Contreseña: <input type="password" name="contreseña2" placeholder="Confirmar Contreseña" class="form-control"/>
            </p>
            <p>
                Fecha Nacimiento: <input type="date" name="fechaN" placeholder="Fecha Nacimiento" class="form-control"/>
            </p>
            <p>
                Cuidad: <input type="text" name="cuidad" placeholder="Cuidad" class="form-control"/>
            </p>
            <p>
                Correo: <input type="email" name="correo" placeholder="Correo" class="form-control"/>
            </p>
            <p>
                Tipo Sangre: <input type="text" name="TipoSangre" placeholder="Tipo Sangre" class="form-control"/>
            </p>
            <p>
                <input type="submit" name="guardar" value='Registrar' class="form-control"/>
            </p>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Pacientes'
    
}
</script>
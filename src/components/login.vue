<template lang="ES">
    <div>
        <h1>Login</h1>
        <form>
            <p>
                Correo: <input type="email" name="correo" placeholder="Correo" class="form-control"/>
            </p>
            <p>
                Contreseña: <input type="password" name="contreseña1" placeholder="Contreseña" class="form-control"/>
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
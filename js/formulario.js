// Mostrar los datos ingresados al enviar el formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
e.preventDefault();
            const form = e.target;
            const resultado = document.getElementById('resultado');
            // Obtener valores
            const nombre = form.nombre.value;
            const email = form.email.value;
            const password = form.password.value;
            const edad = form.edad.value;
            const fecha = form.fecha.value;
            const sexo = form.sexo.value;
            const lenguajes = Array.from(form.querySelectorAll('input[name="lenguajes"]:checked')).map(el => el.value);
            const comentario = form.comentario.value;
            // Mostrar resultado
            resultado.innerHTML = `<h3>Datos ingresados:</h3>
                <b>Nombre:</b> ${nombre}<br>
                <b>Email:</b> ${email}<br>
                <b>Contraseña:</b> ${password}<br>
                <b>Edad:</b> ${edad}<br>
                <b>Fecha de nacimiento:</b> ${fecha}<br>
                <b>Sexo:</b> ${sexo}<br>
                <b>Lenguajes:</b> ${lenguajes.length ? lenguajes.join(', ') : '-'}<br>
                <b>Comentario:</b> ${comentario ? comentario : '-'}<br>`;
            resultado.style.display = 'block';
            resultado.scrollIntoView({behavior: 'smooth'});
        });
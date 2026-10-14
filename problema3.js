document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "encuentre las tensiones T1 y T2 de las cuerdas que sostienen un cuerpo de 5 kg";
    da.innerHTML = "masa = 5 kg<br>peso (W) = 49 N<br>angulo T1 = 131°<br>angulo T2 = 137°<br>angulo peso = 92°";
    f.textContent = "T1 / sen(131°) = W / sen(92°) y T2 / sen(137°) = W / sen(92°)";
    p.textContent = "calcular T1 = (49 / sen(92°)) * sen(131°) y T2 = (49 / sen(92°)) * sen(137°)";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado: T1 = 37.0033 N, T2 = 33.4382 N";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});
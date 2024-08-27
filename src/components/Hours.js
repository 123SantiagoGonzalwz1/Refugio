import React from "react";

const Hours = () => {
    const shelterHours = [
        { day: "Lunes", open: "10:00 A.M", close: "4:00 P.M" },
        { day: "Martes", open: "10:00 A.M", close: "4:00 P.M" },
        { day: "Miércoles", open: "10:00 A.M", close: "4:00 P.M" },
        { day: "Jueves", open: "10:00 A.M", close: "4:00 P.M" },
        { day: "Viernes", open: "10:00 A.M", close: "4:00 P.M" },
        { day: "Sábado", open: "9:00 A.M", close: "8:00 P.M" },
        { day: "Domingo", open: "9:00 A.M", close: "8:00 P.M" }
    ];

    // Obteniendo el día de hoy en español
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' });

    // Capitalizando la primera letra
    const todayCapitalized = today.charAt(0).toUpperCase() + today.slice(1);

    // Encontrando los horarios para el día de hoy
    const todayHours = shelterHours.find(day => day.day === todayCapitalized);

    return (
        <div id="hours">
            <h2>Horario de Hoy</h2>
            {todayHours ? (
                <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
            ) : (
                <p>No se encontraron horarios para hoy.</p>
            )}
        </div>
    );
};

export default Hours;

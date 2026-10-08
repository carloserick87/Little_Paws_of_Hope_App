import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

/** Reparto vertical de la home: los tres bloques caben sin scroll. */
export interface HomeLayout {
    /** Separación entre secciones (y respiro abajo). */
    gap: number;
    /** Alto del banner. */
    hero: number;
    /** Alto del carrusel de destacadas, sin la fila de título. */
    featured: number;
    /** Alto de la fila "Cerca de ti", sin la fila de título. */
    nearby: number;
    /** Alto de cada fila de título ("Mascotas destacadas" / "Cerca de ti"). */
    header: number;
}

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

// Mínimos por debajo de los cuales un bloque deja de ser legible.
const HERO_MIN = 128;
const FEATURED_MIN = 185;
const NEARBY_MIN = 100;

// Reparto calcado de la maqueta: hero ~27% de la escena y, del resto,
// ~65% para las destacadas y ~35% para "Cerca de ti".
const HERO_SHARE = 0.27;
const FEATURED_SHARE = 0.65;

/**
 * @param available Alto real de la escena (medido con onLayout: ya descuenta
 *                  header del Drawer, tab bar e insets). 0 = aún sin medir.
 */
export const useHomeLayout = (available: number): HomeLayout | null => {
    const { fontScale } = useWindowDimensions();

    // Misma cota de fontScale que usan las cards: por encima de 1.3 no se escala más.
    const fs = Math.min(fontScale, 1.3);

    return useMemo(() => {
        if (available <= 0) return null;

        const header = Math.round(30 * fs);
        const gap = Math.round(clamp(available * 0.022, 8, 18));

        // 3 gaps: hero→destacadas, destacadas→cerca y abajo (el hero va pegado arriba).
        const chrome = header * 2 + gap * 3;

        let hero = Math.round(clamp(available * HERO_SHARE, HERO_MIN, 260));
        const rest = available - hero - chrome;

        let featured = Math.round(rest * FEATURED_SHARE);
        let nearby = rest - featured;

        // Pantalla corta: nada de scroll de rescate, todo encoge en proporción.
        const needed = HERO_MIN + FEATURED_MIN + NEARBY_MIN + chrome;

        if (featured < FEATURED_MIN || nearby < NEARBY_MIN) {
            const k = clamp((available - chrome) / (needed - chrome), 0.4, 1);
            hero = Math.round(HERO_MIN * k);
            featured = Math.round(FEATURED_MIN * k);
            nearby = Math.max(available - chrome - hero - featured, 0);
        }

        return { gap, hero, featured, nearby, header };
    }, [available, fs]);
};

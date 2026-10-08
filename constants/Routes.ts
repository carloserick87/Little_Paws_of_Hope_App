import { Ionicons} from "@expo/vector-icons";

// Fuente única de verdad del drawer: `app/drawer/_layout.tsx` registra las pantallas
// desde aquí y `CustomDrawer` pinta las filas con el mismo orden y textos.
export interface MenuRoute {
    title: string;
    subtitle: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;
}

export const DRAWER_ROUTES: MenuRoute[] = [
    { name: '(tabs)',            title: 'Inicio',        subtitle: 'Inicio',                    icon: 'home-outline' },
    { name: 'search/index',      title: 'Buscar',        subtitle: 'Buscar mascotas',           icon: 'search-outline' },
    { name: 'favorites/index',   title: 'Favoritos',     subtitle: 'Tus mascotas favoritas',    icon: 'heart-outline' },
    { name: 'messages/index',    title: 'Mensajes',      subtitle: 'Chats y conversaciones',    icon: 'chatbubble-ellipses-outline' },
    { name: 'requests/index',    title: 'Solicitudes',   subtitle: 'Mis solicitudes de adopción', icon: 'document-text-outline' },
    { name: 'shelter/index',     title: 'Refugios',      subtitle: 'Conoce nuestros refugios',  icon: 'business-outline' },
    { name: 'donations/index',   title: 'Donaciones',    subtitle: 'Ayuda a más patitas',       icon: 'gift-outline' },
    { name: 'activities/index',  title: 'Eventos',       subtitle: 'Eventos y campañas',        icon: 'calendar-outline' },
    { name: 'preferences/index', title: 'Configuración', subtitle: 'Ajustes de la app',         icon: 'settings-outline' },
    { name: 'help/index',        title: 'Ayuda',         subtitle: 'Preguntas frecuentes',      icon: 'help-circle-outline' },
];

// Se renderiza aparte, fijo al pie del drawer.
export const LOGOUT_ROUTE: MenuRoute = {
    name: 'logout/index',
    title: 'Cerrar sesión',
    subtitle: 'Salir de la cuenta',
    icon: 'log-out-outline',
};

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Cadastros",
        icon: <FaIcons.FaUserPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Autores",
                path: "/autores/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Livros",
                path: "/livros/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Locatários",
                path: "/locatarios/",
                icon: <IoIcons.IoIosCreate />,
            },            
        ],
    },
    {
        title: "Fazer a Reserva",
        path: "/livros/reserva/",
        icon: <FaIcons.FaCheck />,
    },
    {
        title: "Consultar",
        path: "/livros/consulta/",
        icon: <FaIcons.FaInfoCircle />,
 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Livros Reservados",
                path: "/reservados/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Livros Disponíveis",
                path: "/disponiveis/",
                icon: <IoIcons.IoIosCreate />,
            }, 
        ],        
    },
    {
        title: "Sair",
        path: "/logout",
        icon: <FaIcons.FaSignOutAlt />,
 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
];
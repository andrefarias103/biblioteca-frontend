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
                path: "/autor/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Livros",
                path: "/livro/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Locatários",
                path: "/locatario/",
                icon: <IoIcons.IoIosCreate />,
            },            
        ],
    },
    {
        title: "Fazer a Reserva",
        path: "/livro/aluguel/",
        icon: <FaIcons.FaCheck />,
    },
    {
        title: "Consultar",
        icon: <FaIcons.FaInfoCircle />,
 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Livros Reservados",
                path: "/livro/reservados/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Livros Disponíveis",
                path: "/livro/disponiveis/",
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
import { Feather } from "@expo/vector-icons";

export const icon = {
    index: (props: any) => <Feather name='home' size={24} {...props}/>,
    explore: (props: any) => <Feather name='compass' size={24} {...props} />,
    setting: (props: any) => <Feather name='settings' size={24} {...props} />
}
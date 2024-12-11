import '../globals.css';
import type { Meta, StoryObj } from '@storybook/react';
import PositionTab from './positionTab';

const meta: Meta<typeof PositionTab> = {
    title: 'PositionTab',
    component: PositionTab,
};

export default meta;
type Story = StoryObj<typeof PositionTab>;

export const Primary: Story = {
    args: {
        notes: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis aptent odio pulvinar curabitur nec metus lectus gravida. Sagittis non leo himenaeos cubilia nam eu lectus lacus vel. Vel gravida consectetur lacinia dictum est taciti tempus hac. Tempor sociosqu fringilla ipsum mattis nullam pellentesque pharetra. Donec porta arcu adipiscing ipsum vitae blandit interdum tortor. Proin hac eu lacus tristique ac sociosqu natoque odio vel. Curae lectus dignissim potenti praesent consequat mauris nec. Senectus vitae urna quam; lacinia aptent semper habitasse.",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Vel molestie senectus enim ultricies ridiculus. Scelerisque at vestibulum lectus aenean vulputate mattis. Vestibulum maecenas dui; commodo efficitur sed hac. Tortor gravida penatibus porttitor convallis enim urna non netus proin. Libero vel fermentum tristique litora ut pretium eu. Felis integer mattis tellus ullamcorper taciti tempor proin parturient placerat.",
        requirements: "Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan amet duis sed, justo taciti pellentesque. Leo risus elementum maecenas viverra potenti magnis elementum. Pulvinar leo sem diam mi vivamus quis ac ex. Sapien per malesuada porta morbi odio elementum orci. Fermentum nullam ut ad purus taciti fringilla. Senectus erat ornare faucibus gravida ligula et sapien nisl.",
    }
};

export const Empty: Story = {};

export const Overflow: Story = {
    args: {
        notes: "Lorem ipsum odor amet, consectetuer adipiscing elit. Torquent nascetur nunc primis varius sociosqu porta tincidunt dictum. Natoque placerat sociosqu vitae phasellus duis hac class nulla odio. Nascetur dictumst vehicula; elementum curabitur hac habitant. Suspendisse class quisque sagittis maecenas dignissim id. Convallis nec sed ad cursus potenti lorem sit primis curae. Elit massa conubia in conubia aliquam, ornare lorem. Nibh nullam platea per nunc venenatis nascetur curabitur tempus velit. Felis ridiculus quis aptent, sagittis varius etiam taciti in. Lacus ornare elementum aliquam ad ridiculus feugiat litora. Dignissim nunc mauris montes non dis aliquam id. Montes consectetur est donec facilisis nunc mi montes. Rutrum ligula cubilia sagittis massa hac felis pharetra. Consequat pulvinar etiam condimentum feugiat turpis donec. Aliquet amet cubilia donec congue justo efficitur mus fusce id. Interdum pellentesque gravida dapibus proin sed. Habitasse sodales sodales aptent arcu aliquam facilisis netus. Mattis ac posuere inceptos pellentesque dictum molestie lorem iaculis tristique. Augue platea dis fames maecenas rutrum senectus habitasse quisque laoreet. Est maecenas duis dis libero vel magna. Dui sit curabitur faucibus; torquent sodales nulla? At nostra suspendisse etiam tempor; velit ut volutpat. Turpis dapibus quisque mi condimentum hendrerit class. Laoreet rhoncus sed vehicula facilisi orci per vestibulum felis vitae. Velit suspendisse egestas ad aliquet neque. Massa risus vel pulvinar facilisi eu. Litora aliquam at per metus eget ut efficitur in. Amet eleifend augue aliquet odio parturient. Habitasse ornare sed bibendum augue aptent. Odio nulla porttitor congue porttitor facilisi. Accumsan vivamus duis hendrerit gravida montes accumsan magna. Massa consequat adipiscing interdum justo himenaeos urna. Donec pharetra proin mi dui tristique tincidunt elementum. Placerat fringilla cubilia habitant massa scelerisque risus. Ultricies ultricies praesent ac, commodo mattis congue. Laoreet lacinia vestibulum augue imperdiet congue. Malesuada interdum dapibus himenaeos nam enim penatibus! Integer odio scelerisque sit libero, tellus senectus lacus nostra. Rutrum amet turpis aliquam iaculis ad pharetra massa. Himenaeos massa elementum cursus facilisi ex. Scelerisque sociosqu conubia hendrerit ridiculus mattis. Dictum tortor convallis imperdiet hendrerit a himenaeos rhoncus suscipit.",
    }
};
import PropTypes from 'prop-types';
declare const Chip: {
    ({ mode, children, icon, avatar, selected, selectedColor, disabled, accessibilityLabel, textStyle, style, theme, testID, onPress, onLongPress, onClose, ...other }: any): JSX.Element;
    propTypes: {
        mode: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        icon: PropTypes.Requireable<any>;
        avatar: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        selected: PropTypes.Requireable<boolean>;
        selectedColor: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        accessibilityLabel: PropTypes.Requireable<string>;
        textStyle: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
        theme: PropTypes.Requireable<any>;
        testID: PropTypes.Requireable<string>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        mode: string;
        children: string;
        icon: string;
        avatar: string;
        selected: boolean;
        selectedColor: string;
        disabled: boolean;
        accessibilityLabel: string;
        textStyle: string;
        style: string;
        theme: string;
        testID: string;
        onPress: () => void;
        onLongPress: () => void;
        onClose: () => void;
    };
};
export default Chip;

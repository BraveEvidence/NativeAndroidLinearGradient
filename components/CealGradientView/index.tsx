import {requireNativeComponent, ViewStyle} from 'react-native';

interface NativeComponentProps {
  colors: Array<string>;
  style: ViewStyle;
}

const CealGradientView =
  requireNativeComponent<NativeComponentProps>('CealGradientView');
export default CealGradientView;

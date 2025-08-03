import {
    forwardRef,
    memo,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import {
    ActivityIndicator,
    Animated,
    Modal,
    StyleSheet,
    View,
} from "react-native";
import { useTheme } from "../../features/hooks/useTheme";

type loaderProps = {};

export type LoaderRef = {
  start: () => void;
  stop: () => void;
};

const Loader = forwardRef<LoaderRef, loaderProps>((props, ref) => {
  const [Visible, setVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
      }).start();
    }, 4000);

    return () => {
      animation.resetAnimation();
    };
  }, [Visible]);

  useImperativeHandle(
    ref,
    () => ({
      start: () => {
        setVisible(true);
      },
      stop: () => {
        setVisible(false);
      },
    }),
    []
  );

  return (
    <Modal transparent statusBarTranslucent visible={Visible}>
      <View style={[styles.loaderBackdrop, { backgroundColor: colors.background }]}>
        <View style={[styles.loader, { backgroundColor: colors.primary }]}>
          <ActivityIndicator size={"large"} />
          <Animated.Text style={[styles.text, { opacity: animation, color: colors.text }]}>
            {"Please wait..."}
          </Animated.Text>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  loader: {
    height: 90,
    width: 90,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  loaderBackdrop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { position: "absolute", bottom: 10, fontSize: 13 },
});

export default memo(Loader);

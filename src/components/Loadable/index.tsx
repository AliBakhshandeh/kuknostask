import { Suspense, ComponentType } from "react";

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) =>
    (
      <Suspense fallback={<span>در حال بارگذاری اطلاعات</span>}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;

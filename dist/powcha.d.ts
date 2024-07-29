export {};

declare module 'altcha';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'powcha-widget': PoWCHAWidget;
    }

    interface PoWCHAWidgetCSSProperties extends React.CSSProperties {
      '--powcha-border-width'?: string;
      '--powcha-border-radius'?: string;
      '--powcha-color-base'?: string;
      '--powcha-color-border'?: string;
      '--powcha-color-text'?: string;
      '--powcha-color-border-focus'?: string;
      '--powcha-color-error-text'?: string;
      '--powcha-color-footer-bg'?: string;
      '--powcha-max-width'?: string;
    }

    interface PoWCHAWidget {
      auto?: 'onfocus' | 'onload' | 'onsubmit';
      blockspam?: boolean;
      challengeurl?: string;
      challengejson?: string;
      debug?: boolean;
      delay?: number;
      expire?: number;
      floating?: 'auto' | 'top' | 'bottom' | 'false' | '' | boolean;
      floatinganchor?: string;
      floatingoffset?: number;
      hidefooter?: boolean;
      hidelogo?: boolean;
      name?: string;
      formfieldname?: string;
      maxnumber?: number;
      mockerror?: boolean;
      refetchonexpire?: boolean;
      spamfilter?: boolean | 'ipAddress';
      strings?: string;
      style?: PoWCHAWidgetCSSProperties;
      test?: boolean | number;
      verifyurl?: string;
      workers?: number;
      workerurl?: string;
    }
  }
}
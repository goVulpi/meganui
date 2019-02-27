/**
 * @class Hiperlink
 */

import * as React from "react";
import * as PropTypes from "prop-types";
import { stringify } from "querystring";
import ClickableElement, {
  ClickableElementAttributes,
  ClickableElementProps
} from "../ClickableElement";

export interface HiperlinkProps extends ClickableElementProps {
  button?: boolean;
  href?: string;
  itemProp?: string;
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement>) => void) | undefined;
  rel?: string;
  to?: string;
  urlParams?: object;
  utmCampaign?: string;
  utmContent?: string;
  utmMedium?: string;
  utmSource?: string;
  utmTerm?: string;
  target?: string;
}

export interface HiperlinkAttributes extends ClickableElementAttributes {
  href?: string;
  itemProp?: string;
  rel?: string;
  target?: string;
}

export default class Hiperlink extends ClickableElement<HiperlinkProps> {
  constructor(props: HiperlinkProps) {
    super(props);
  }

  static propTypes = Object.assign(ClickableElement.propTypes, {
    button: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    urlParams: PropTypes.object,
    utmCampaign: PropTypes.string,
    utmContent: PropTypes.string,
    utmMedium: PropTypes.string,
    utmSource: PropTypes.string,
    utmTerm: PropTypes.string,
    target: PropTypes.string
  });

  protected getDefaultClassName(): string {
    return true === this.props.button ? "button" : "hiperlink";
  }

  protected getHrefAttribute(): string {
    const {
      href,
      to,
      urlParams,
      utmCampaign,
      utmContent,
      utmMedium,
      utmSource,
      utmTerm
    } = this.props;
    if ("string" === typeof href) {
      return href;
    }
    if ("undefined" === typeof to) {
      return "#";
    }
    let urlParamsObject = {};
    if ("undefined" !== typeof urlParams) {
      urlParamsObject = urlParams;
    }
    /**
     * @see https://rockcontent.com/blog/parametros-utm-do-google-analytics/
     */
    if (utmCampaign || utmContent || utmMedium || utmSource || utmTerm) {
      urlParamsObject = Object.assign(urlParamsObject, {
        utm_campaign: utmCampaign,
        utm_content: utmContent,
        utm_medium: utmMedium,
        utm_source: utmSource,
        utm_term: utmTerm
      });
    }
    const stringified = stringify(urlParamsObject);
    return `${to}?${stringified}`;
  }

  protected getAttributes(): HiperlinkAttributes {
    const { itemProp, target } = this.props;

    return Object.assign(super.getAttributes(), {
      href: this.getHrefAttribute(),
      itemProp: itemProp,
      target: target
    });
  }

  render() {
    const { children, onClick } = this.props;
    return (
      <a {...this.getAttributes()} onClick={onClick}>
        {children ? children : ""}
      </a>
    );
  }
}

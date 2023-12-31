// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tp998cDC43Ee6UoWcBrFhX
// Component: w08lVmMdeihU
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { RichLayout } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: FNIk-CnxQYXU/codeComponent
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: u-J0rH0B-4/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_app_starter.module.css"; // plasmic-import: tp998cDC43Ee6UoWcBrFhX/projectcss
import sty from "./PlasmicPageLayout.module.css"; // plasmic-import: w08lVmMdeihU/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Z1FEOwoB2pVN/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 2r-VZK9x-79O/icon

createPlasmicElementProxy;

export const PlasmicPageLayout__VariantProps = new Array();

export const PlasmicPageLayout__ArgProps = new Array("children");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPageLayout__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <RichLayout
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      logoElement={
        <Icon2Icon
          className={classNames(projectcss.all, sty.svg__xkjhH)}
          role={"img"}
        />
      }
      navMenuItems={(() => {
        const __composite = [{ path: null, name: null }];
        __composite["0"]["path"] = `/`;
        __composite["0"]["name"] = "Home";
        return __composite;
      })()}
      simpleNavTheme={(() => {
        const __composite = { scheme: null };
        __composite["scheme"] = "primary";
        return __composite;
      })()}
      title={"App title"}
    >
      <LoadingBoundary
        data-plasmic-name={"loadingBoundary"}
        data-plasmic-override={overrides.loadingBoundary}
        className={classNames("__wab_instance", sty.loadingBoundary)}
        loadingState={
          <ph.DataCtxReader>
            {$ctx => (
              <div className={classNames(projectcss.all, sty.freeBox__wxt33)}>
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___7EYrX)}
                  role={"img"}
                />
              </div>
            )}
          </ph.DataCtxReader>
        }
      >
        <ph.DataCtxReader>
          {$ctx => (
            <div className={classNames(projectcss.all, sty.freeBox__dpVmv)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <section
                    className={classNames(projectcss.all, sty.section__eYmc6)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1___9Zzt
                      )}
                    >
                      {"Untitled page"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aL3FI
                      )}
                    >
                      {
                        "Press the big blue + button to insert components like Tables, Text, Buttons, and Forms.\n\nJoin our Slack Community (icon in bottom left) for help!"
                      }
                    </div>
                  </section>
                ),

                value: args.children
              })}
            </div>
          )}
        </ph.DataCtxReader>
      </LoadingBoundary>
    </RichLayout>
  );
}

const PlasmicDescendants = {
  root: ["root", "loadingBoundary"],
  loadingBoundary: ["loadingBoundary"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPageLayout__ArgProps,
          internalVariantPropNames: PlasmicPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPageLayout";
  } else {
    func.displayName = `PlasmicPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicPageLayout = Object.assign(
  // Top-level PlasmicPageLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),
    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: PlasmicPageLayout__VariantProps,
    internalArgProps: PlasmicPageLayout__ArgProps
  }
);

export default PlasmicPageLayout;
/* prettier-ignore-end */

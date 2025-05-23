'use strict';

var React36 = require('react');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var classVarianceAuthority = require('class-variance-authority');
var AlertDialogPrimitive = require('@radix-ui/react-alert-dialog');
var reactSlot = require('@radix-ui/react-slot');
var AspectRatioPrimitive = require('@radix-ui/react-aspect-ratio');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var reactDayPicker = require('react-day-picker');
var useEmblaCarousel = require('embla-carousel-react');
var RechartsPrimitive = require('recharts');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var CollapsiblePrimitive = require('@radix-ui/react-collapsible');
var cmdk = require('cmdk');
var DialogPrimitive = require('@radix-ui/react-dialog');
var ContextMenuPrimitive = require('@radix-ui/react-context-menu');
var vaul = require('vaul');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var reactHookForm = require('react-hook-form');
var LabelPrimitive = require('@radix-ui/react-label');
var HoverCardPrimitive = require('@radix-ui/react-hover-card');
var inputOtp = require('input-otp');
var MenubarPrimitive = require('@radix-ui/react-menubar');
var NavigationMenuPrimitive = require('@radix-ui/react-navigation-menu');
var PopoverPrimitive = require('@radix-ui/react-popover');
var ProgressPrimitive = require('@radix-ui/react-progress');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var ResizablePrimitive = require('react-resizable-panels');
var ScrollAreaPrimitive = require('@radix-ui/react-scroll-area');
var SelectPrimitive = require('@radix-ui/react-select');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var SliderPrimitive = require('@radix-ui/react-slider');
var nextThemes = require('next-themes');
var sonner = require('sonner');
var SwitchPrimitives = require('@radix-ui/react-switch');
var TabsPrimitive = require('@radix-ui/react-tabs');
var ToastPrimitives = require('@radix-ui/react-toast');
var TogglePrimitive = require('@radix-ui/react-toggle');
var ToggleGroupPrimitive = require('@radix-ui/react-toggle-group');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React36__namespace = /*#__PURE__*/_interopNamespace(React36);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var AlertDialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(AlertDialogPrimitive);
var AspectRatioPrimitive__namespace = /*#__PURE__*/_interopNamespace(AspectRatioPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);
var RechartsPrimitive__namespace = /*#__PURE__*/_interopNamespace(RechartsPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var CollapsiblePrimitive__namespace = /*#__PURE__*/_interopNamespace(CollapsiblePrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var ContextMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(ContextMenuPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var HoverCardPrimitive__namespace = /*#__PURE__*/_interopNamespace(HoverCardPrimitive);
var MenubarPrimitive__namespace = /*#__PURE__*/_interopNamespace(MenubarPrimitive);
var NavigationMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(NavigationMenuPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var ProgressPrimitive__namespace = /*#__PURE__*/_interopNamespace(ProgressPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var ResizablePrimitive__namespace = /*#__PURE__*/_interopNamespace(ResizablePrimitive);
var ScrollAreaPrimitive__namespace = /*#__PURE__*/_interopNamespace(ScrollAreaPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);
var TogglePrimitive__namespace = /*#__PURE__*/_interopNamespace(TogglePrimitive);
var ToggleGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(ToggleGroupPrimitive);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// components.json
var components_default = {
  $schema: "https://ui.shadcn.com/schema.json",
  style: "default",
  rsc: true,
  tsx: true,
  tailwind: {
    config: "tailwind.config.ts",
    css: "app/globals.css",
    baseColor: "neutral",
    cssVariables: true,
    prefix: ""
  },
  aliases: {
    components: "@/components",
    utils: "@/lib/utils",
    ui: "@/components/ui",
    lib: "@/lib",
    hooks: "@/hooks"
  },
  iconLibrary: "lucide"
};

// tailwind.config.ts
var config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [__require("tailwindcss-animate")]
};
var tailwind_config_default = config;
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// components/ui/accordion.tsx
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AccordionPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn("border-b", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(AccordionPrimitive__namespace.Header, { className: "flex" }, /* @__PURE__ */ React36__namespace.createElement(
    AccordionPrimitive__namespace.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
  ));
});
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AccordionPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("div", { className: cn("pb-4 pt-0", className) }, children)
  );
});
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var alertVariants = classVarianceAuthority.cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props)
  );
});
Alert.displayName = "Alert";
var AlertTitle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "h5",
    __spreadValues({
      ref,
      className: cn("mb-1 font-medium leading-none tracking-tight", className)
    }, props)
  );
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ React36__namespace.createElement(
      Comp,
      __spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";

// components/ui/alert-dialog.tsx
var AlertDialog = AlertDialogPrimitive__namespace.Root;
var AlertDialogTrigger = AlertDialogPrimitive__namespace.Trigger;
var AlertDialogPortal = AlertDialogPrimitive__namespace.Portal;
var AlertDialogOverlay = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AlertDialogPrimitive__namespace.Overlay,
    __spreadProps(__spreadValues({
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props), {
      ref
    })
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
var AlertDialogContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(AlertDialogPortal, null, /* @__PURE__ */ React36__namespace.createElement(AlertDialogOverlay, null), /* @__PURE__ */ React36__namespace.createElement(
    AlertDialogPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )
    }, props)
  ));
});
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
var AlertDialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )
    }, props)
  );
};
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AlertDialogPrimitive__namespace.Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold", className)
    }, props)
  );
});
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
var AlertDialogDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AlertDialogPrimitive__namespace.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
var AlertDialogAction = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AlertDialogPrimitive__namespace.Action,
    __spreadValues({
      ref,
      className: cn(buttonVariants(), className)
    }, props)
  );
});
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
var AlertDialogCancel = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AlertDialogPrimitive__namespace.Cancel,
    __spreadValues({
      ref,
      className: cn(
        buttonVariants({ variant: "outline" }),
        "mt-2 sm:mt-0",
        className
      )
    }, props)
  );
});
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;
var AspectRatio = AspectRatioPrimitive__namespace.Root;
var Avatar = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AvatarPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )
    }, props)
  );
});
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AvatarPrimitive__namespace.Image,
    __spreadValues({
      ref,
      className: cn("aspect-square h-full w-full", className)
    }, props)
  );
});
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    AvatarPrimitive__namespace.Fallback,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
var badgeVariants = classVarianceAuthority.cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ React36__namespace.createElement("div", __spreadValues({ className: cn(badgeVariants({ variant }), className) }, props));
}
var Breadcrumb = React36__namespace.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React36__namespace.createElement("nav", __spreadValues({ ref, "aria-label": "breadcrumb" }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "ol",
    __spreadValues({
      ref,
      className: cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "li",
    __spreadValues({
      ref,
      className: cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = __objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ React36__namespace.createElement(
    Comp,
    __spreadValues({
      ref,
      className: cn("transition-colors hover:text-foreground", className)
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "span",
    __spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className)
    }, props)
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = (_a) => {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "li",
    __spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)
    }, props),
    children != null ? children : /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronRight, null)
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "span",
    __spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "sr-only" }, "More")
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
function Calendar(_a) {
  var _b = _a, {
    className,
    classNames,
    showOutsideDays = true
  } = _b, props = __objRest(_b, [
    "className",
    "classNames",
    "showOutsideDays"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    reactDayPicker.DayPicker,
    __spreadValues({
      showOutsideDays,
      className: cn("p-3", className),
      classNames: __spreadValues({
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible"
      }, classNames),
      components: {
        IconLeft: (_a2) => {
          __objRest(_a2, []);
          return /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronLeft, { className: "h-4 w-4" });
        },
        IconRight: (_b2) => {
          __objRest(_b2, []);
          return /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronRight, { className: "h-4 w-4" });
        }
      }
    }, props)
  );
}
Calendar.displayName = "Calendar";
var Card = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )
    }, props)
  );
});
Card.displayName = "Card";
var CardHeader = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement("div", __spreadValues({ ref, className: cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var CarouselContext = React36__namespace.createContext(null);
function useCarousel() {
  const context = React36__namespace.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children
    } = _b, props = __objRest(_b, [
      "orientation",
      "opts",
      "setApi",
      "plugins",
      "className",
      "children"
    ]);
    const [carouselRef, api] = useEmblaCarousel__default.default(
      __spreadProps(__spreadValues({}, opts), {
        axis: orientation === "horizontal" ? "x" : "y"
      }),
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React36__namespace.useState(false);
    const [canScrollNext, setCanScrollNext] = React36__namespace.useState(false);
    const onSelect = React36__namespace.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React36__namespace.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React36__namespace.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React36__namespace.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React36__namespace.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React36__namespace.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ React36__namespace.createElement(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        }
      },
      /* @__PURE__ */ React36__namespace.createElement(
        "div",
        __spreadValues({
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel"
        }, props),
        children
      )
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ React36__namespace.createElement("div", { ref: carouselRef, className: "overflow-hidden" }, /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      )
    }, props)
  ));
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { orientation } = useCarousel();
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )
    }, props)
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "outline", size = "icon" } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ React36__namespace.createElement(
    Button,
    __spreadValues({
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ArrowLeft, { className: "h-4 w-4" }),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "sr-only" }, "Previous slide")
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant = "outline", size = "icon" } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ React36__namespace.createElement(
    Button,
    __spreadValues({
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ArrowRight, { className: "h-4 w-4" }),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "sr-only" }, "Next slide")
  );
});
CarouselNext.displayName = "CarouselNext";
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React36__namespace.createContext(null);
function useChart() {
  const context = React36__namespace.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
var ChartContainer = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { id, className, children, config: config2 } = _b, props = __objRest(_b, ["id", "className", "children", "config"]);
  const uniqueId = React36__namespace.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ React36__namespace.createElement(ChartContext.Provider, { value: { config: config2 } }, /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      "data-chart": chartId,
      ref,
      className: cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(ChartStyle, { id: chartId, config: config2 }),
    /* @__PURE__ */ React36__namespace.createElement(RechartsPrimitive__namespace.ResponsiveContainer, null, children)
  ));
});
ChartContainer.displayName = "Chart";
var ChartStyle = ({ id, config: config2 }) => {
  const colorConfig = Object.entries(config2).filter(
    ([_, config3]) => config3.theme || config3.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ React36__namespace.createElement(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            var _a;
            const color = ((_a = itemConfig.theme) == null ? void 0 : _a[theme]) || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive__namespace.Tooltip;
var ChartTooltipContent = React36__namespace.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config: config2 } = useChart();
    const tooltipLabel = React36__namespace.useMemo(() => {
      var _a;
      if (hideLabel || !(payload == null ? void 0 : payload.length)) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config2, item, key);
      const value = !labelKey && typeof label === "string" ? ((_a = config2[label]) == null ? void 0 : _a.label) || label : itemConfig == null ? void 0 : itemConfig.label;
      if (labelFormatter) {
        return /* @__PURE__ */ React36__namespace.createElement("div", { className: cn("font-medium", labelClassName) }, labelFormatter(value, payload));
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ React36__namespace.createElement("div", { className: cn("font-medium", labelClassName) }, value);
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config2,
      labelKey
    ]);
    if (!active || !(payload == null ? void 0 : payload.length)) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ React36__namespace.createElement(
      "div",
      {
        ref,
        className: cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )
      },
      !nestLabel ? tooltipLabel : null,
      /* @__PURE__ */ React36__namespace.createElement("div", { className: "grid gap-1.5" }, payload.map((item, index) => {
        const key = `${nameKey || item.name || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config2, item, key);
        const indicatorColor = color || item.payload.fill || item.color;
        return /* @__PURE__ */ React36__namespace.createElement(
          "div",
          {
            key: item.dataKey,
            className: cn(
              "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
              indicator === "dot" && "items-center"
            )
          },
          formatter && (item == null ? void 0 : item.value) !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ React36__namespace.createElement(React36__namespace.Fragment, null, (itemConfig == null ? void 0 : itemConfig.icon) ? /* @__PURE__ */ React36__namespace.createElement(itemConfig.icon, null) : !hideIndicator && /* @__PURE__ */ React36__namespace.createElement(
            "div",
            {
              className: cn(
                "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                {
                  "h-2.5 w-2.5": indicator === "dot",
                  "w-1": indicator === "line",
                  "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                  "my-0.5": nestLabel && indicator === "dashed"
                }
              ),
              style: {
                "--color-bg": indicatorColor,
                "--color-border": indicatorColor
              }
            }
          ), /* @__PURE__ */ React36__namespace.createElement(
            "div",
            {
              className: cn(
                "flex flex-1 justify-between leading-none",
                nestLabel ? "items-end" : "items-center"
              )
            },
            /* @__PURE__ */ React36__namespace.createElement("div", { className: "grid gap-1.5" }, nestLabel ? tooltipLabel : null, /* @__PURE__ */ React36__namespace.createElement("span", { className: "text-muted-foreground" }, (itemConfig == null ? void 0 : itemConfig.label) || item.name)),
            item.value && /* @__PURE__ */ React36__namespace.createElement("span", { className: "font-mono font-medium tabular-nums text-foreground" }, item.value.toLocaleString())
          ))
        );
      }))
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive__namespace.Legend;
var ChartLegendContent = React36__namespace.forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config: config2 } = useChart();
    if (!(payload == null ? void 0 : payload.length)) {
      return null;
    }
    return /* @__PURE__ */ React36__namespace.createElement(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )
      },
      payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config2, item, key);
        return /* @__PURE__ */ React36__namespace.createElement(
          "div",
          {
            key: item.value,
            className: cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            )
          },
          (itemConfig == null ? void 0 : itemConfig.icon) && !hideIcon ? /* @__PURE__ */ React36__namespace.createElement(itemConfig.icon, null) : /* @__PURE__ */ React36__namespace.createElement(
            "div",
            {
              className: "h-2 w-2 shrink-0 rounded-[2px]",
              style: {
                backgroundColor: item.color
              }
            }
          ),
          itemConfig == null ? void 0 : itemConfig.label
        );
      })
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config2, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config2 ? config2[configLabelKey] : config2[key];
}
var Checkbox = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    CheckboxPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(
      CheckboxPrimitive__namespace.Indicator,
      {
        className: cn("flex items-center justify-center text-current")
      },
      /* @__PURE__ */ React36__namespace.createElement(lucideReact.Check, { className: "h-4 w-4" })
    )
  );
});
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var Collapsible = CollapsiblePrimitive__namespace.Root;
var CollapsibleTrigger2 = CollapsiblePrimitive__namespace.CollapsibleTrigger;
var CollapsibleContent2 = CollapsiblePrimitive__namespace.CollapsibleContent;
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(DialogPortal, null, /* @__PURE__ */ React36__namespace.createElement(DialogOverlay, null), /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, /* @__PURE__ */ React36__namespace.createElement(lucideReact.X, { className: "h-4 w-4" }), /* @__PURE__ */ React36__namespace.createElement("span", { className: "sr-only" }, "Close"))
  ));
});
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;

// components/ui/command.tsx
var Command = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    cmdk.Command,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )
    }, props)
  );
});
Command.displayName = cmdk.Command.displayName;
var CommandDialog = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React36__namespace.createElement(Dialog, __spreadValues({}, props), /* @__PURE__ */ React36__namespace.createElement(DialogContent, { className: "overflow-hidden p-0 shadow-lg" }, /* @__PURE__ */ React36__namespace.createElement(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, children)));
};
var CommandInput = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "" }, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ React36__namespace.createElement(
    cmdk.Command.Input,
    __spreadValues({
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props)
  ));
});
CommandInput.displayName = cmdk.Command.Input.displayName;
var CommandList = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    cmdk.Command.List,
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
    }, props)
  );
});
CommandList.displayName = cmdk.Command.List.displayName;
var CommandEmpty = React36__namespace.forwardRef((props, ref) => /* @__PURE__ */ React36__namespace.createElement(
  cmdk.Command.Empty,
  __spreadValues({
    ref,
    className: "py-6 text-center text-sm"
  }, props)
));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
var CommandGroup = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    cmdk.Command.Group,
    __spreadValues({
      ref,
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )
    }, props)
  );
});
CommandGroup.displayName = cmdk.Command.Group.displayName;
var CommandSeparator = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    cmdk.Command.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 h-px bg-border", className)
    }, props)
  );
});
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
var CommandItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    cmdk.Command.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )
    }, props)
  );
});
CommandItem.displayName = cmdk.Command.Item.displayName;
var CommandShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
CommandShortcut.displayName = "CommandShortcut";
var ContextMenu = ContextMenuPrimitive__namespace.Root;
var ContextMenuTrigger = ContextMenuPrimitive__namespace.Trigger;
var ContextMenuGroup = ContextMenuPrimitive__namespace.Group;
var ContextMenuPortal = ContextMenuPrimitive__namespace.Portal;
var ContextMenuSub = ContextMenuPrimitive__namespace.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive__namespace.RadioGroup;
var ContextMenuSubTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.SubTrigger,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
  );
});
ContextMenuSubTrigger.displayName = ContextMenuPrimitive__namespace.SubTrigger.displayName;
var ContextMenuSubContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
ContextMenuSubContent.displayName = ContextMenuPrimitive__namespace.SubContent.displayName;
var ContextMenuContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(ContextMenuPrimitive__namespace.Portal, null, /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ));
});
ContextMenuContent.displayName = ContextMenuPrimitive__namespace.Content.displayName;
var ContextMenuItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
ContextMenuItem.displayName = ContextMenuPrimitive__namespace.Item.displayName;
var ContextMenuCheckboxItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.CheckboxItem,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(ContextMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Check, { className: "h-4 w-4" }))),
    children
  );
});
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive__namespace.CheckboxItem.displayName;
var ContextMenuRadioItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.RadioItem,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(ContextMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Circle, { className: "h-2 w-2 fill-current" }))),
    children
  );
});
ContextMenuRadioItem.displayName = ContextMenuPrimitive__namespace.RadioItem.displayName;
var ContextMenuLabel = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold text-foreground",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
ContextMenuLabel.displayName = ContextMenuPrimitive__namespace.Label.displayName;
var ContextMenuSeparator = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ContextMenuPrimitive__namespace.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-border", className)
    }, props)
  );
});
ContextMenuSeparator.displayName = ContextMenuPrimitive__namespace.Separator.displayName;
var ContextMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
var Drawer = (_a) => {
  var _b = _a, {
    shouldScaleBackground = true
  } = _b, props = __objRest(_b, [
    "shouldScaleBackground"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    vaul.Drawer.Root,
    __spreadValues({
      shouldScaleBackground
    }, props)
  );
};
Drawer.displayName = "Drawer";
var DrawerTrigger = vaul.Drawer.Trigger;
var DrawerPortal = vaul.Drawer.Portal;
var DrawerClose = vaul.Drawer.Close;
var DrawerOverlay = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    vaul.Drawer.Overlay,
    __spreadValues({
      ref,
      className: cn("fixed inset-0 z-50 bg-black/80", className)
    }, props)
  );
});
DrawerOverlay.displayName = vaul.Drawer.Overlay.displayName;
var DrawerContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(DrawerPortal, null, /* @__PURE__ */ React36__namespace.createElement(DrawerOverlay, null), /* @__PURE__ */ React36__namespace.createElement(
    vaul.Drawer.Content,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
    children
  ));
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props)
  );
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    vaul.Drawer.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = vaul.Drawer.Title.displayName;
var DrawerDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    vaul.Drawer.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DrawerDescription.displayName = vaul.Drawer.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.SubTrigger,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronRight, { className: "ml-auto" })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ React36__namespace.createElement(DropdownMenuPrimitive__namespace.Portal, null, /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ));
});
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(DropdownMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Check, { className: "h-4 w-4" }))),
    children
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.RadioItem,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(DropdownMenuPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Circle, { className: "h-2 w-2 fill-current" }))),
    children
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DropdownMenuPrimitive__namespace.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "span",
    __spreadValues({
      className: cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var labelVariants = classVarianceAuthority.cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label3 = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    LabelPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(labelVariants(), className)
    }, props)
  );
});
Label3.displayName = LabelPrimitive__namespace.Root.displayName;

// components/ui/form.tsx
var Form = reactHookForm.FormProvider;
var FormFieldContext = React36__namespace.createContext(
  {}
);
var FormField = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React36__namespace.createElement(FormFieldContext.Provider, { value: { name: props.name } }, /* @__PURE__ */ React36__namespace.createElement(reactHookForm.Controller, __spreadValues({}, props)));
};
var useFormField = () => {
  const fieldContext = React36__namespace.useContext(FormFieldContext);
  const itemContext = React36__namespace.useContext(FormItemContext);
  const { getFieldState, formState } = reactHookForm.useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return __spreadValues({
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`
  }, fieldState);
};
var FormItemContext = React36__namespace.createContext(
  {}
);
var FormItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const id = React36__namespace.useId();
  return /* @__PURE__ */ React36__namespace.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React36__namespace.createElement("div", __spreadValues({ ref, className: cn("space-y-2", className) }, props)));
});
FormItem.displayName = "FormItem";
var FormLabel = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ React36__namespace.createElement(
    Label3,
    __spreadValues({
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId
    }, props)
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React36__namespace.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ React36__namespace.createElement(
    reactSlot.Slot,
    __spreadValues({
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error
    }, props)
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ React36__namespace.createElement(
    "p",
    __spreadValues({
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  const { error, formMessageId } = useFormField();
  const body = error ? String(error == null ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ React36__namespace.createElement(
    "p",
    __spreadValues({
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className)
    }, props),
    body
  );
});
FormMessage.displayName = "FormMessage";
var HoverCard = HoverCardPrimitive__namespace.Root;
var HoverCardTrigger = HoverCardPrimitive__namespace.Trigger;
var HoverCardContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    HoverCardPrimitive__namespace.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
HoverCardContent.displayName = HoverCardPrimitive__namespace.Content.displayName;
var Input = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ React36__namespace.createElement(
      "input",
      __spreadValues({
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref
      }, props)
    );
  }
);
Input.displayName = "Input";
var InputOTP = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, containerClassName } = _b, props = __objRest(_b, ["className", "containerClassName"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    inputOtp.OTPInput,
    __spreadValues({
      ref,
      containerClassName: cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className)
    }, props)
  );
});
InputOTP.displayName = "InputOTP";
var InputOTPGroup = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement("div", __spreadValues({ ref, className: cn("flex items-center", className) }, props));
});
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { index, className } = _b, props = __objRest(_b, ["index", "className"]);
  const inputOTPContext = React36__namespace.useContext(inputOtp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      className: cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )
    }, props),
    char,
    hasFakeCaret && /* @__PURE__ */ React36__namespace.createElement("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }))
  );
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React36__namespace.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React36__namespace.createElement("div", __spreadValues({ ref, role: "separator" }, props), /* @__PURE__ */ React36__namespace.createElement(lucideReact.Dot, null));
});
InputOTPSeparator.displayName = "InputOTPSeparator";
var MenubarMenu = MenubarPrimitive__namespace.Menu;
var MenubarGroup = MenubarPrimitive__namespace.Group;
var MenubarPortal = MenubarPrimitive__namespace.Portal;
var MenubarSub = MenubarPrimitive__namespace.Sub;
var MenubarRadioGroup = MenubarPrimitive__namespace.RadioGroup;
var Menubar = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        className
      )
    }, props)
  );
});
Menubar.displayName = MenubarPrimitive__namespace.Root.displayName;
var MenubarTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )
    }, props)
  );
});
MenubarTrigger.displayName = MenubarPrimitive__namespace.Trigger.displayName;
var MenubarSubTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = __objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.SubTrigger,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronRight, { className: "ml-auto h-4 w-4" })
  );
});
MenubarSubTrigger.displayName = MenubarPrimitive__namespace.SubTrigger.displayName;
var MenubarSubContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.SubContent,
    __spreadValues({
      ref,
      className: cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
MenubarSubContent.displayName = MenubarPrimitive__namespace.SubContent.displayName;
var MenubarContent = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, align = "start", alignOffset = -4, sideOffset = 8 } = _b, props = __objRest(_b, ["className", "align", "alignOffset", "sideOffset"]);
    return /* @__PURE__ */ React36__namespace.createElement(MenubarPrimitive__namespace.Portal, null, /* @__PURE__ */ React36__namespace.createElement(
      MenubarPrimitive__namespace.Content,
      __spreadValues({
        ref,
        align,
        alignOffset,
        sideOffset,
        className: cn(
          "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )
      }, props)
    ));
  }
);
MenubarContent.displayName = MenubarPrimitive__namespace.Content.displayName;
var MenubarItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
MenubarItem.displayName = MenubarPrimitive__namespace.Item.displayName;
var MenubarCheckboxItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = __objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.CheckboxItem,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(MenubarPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Check, { className: "h-4 w-4" }))),
    children
  );
});
MenubarCheckboxItem.displayName = MenubarPrimitive__namespace.CheckboxItem.displayName;
var MenubarRadioItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.RadioItem,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(MenubarPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Circle, { className: "h-2 w-2 fill-current" }))),
    children
  );
});
MenubarRadioItem.displayName = MenubarPrimitive__namespace.RadioItem.displayName;
var MenubarLabel = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = __objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.Label,
    __spreadValues({
      ref,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
MenubarLabel.displayName = MenubarPrimitive__namespace.Label.displayName;
var MenubarSeparator = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    MenubarPrimitive__namespace.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
MenubarSeparator.displayName = MenubarPrimitive__namespace.Separator.displayName;
var MenubarShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
MenubarShortcut.displayname = "MenubarShortcut";
var NavigationMenu = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    NavigationMenuPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(NavigationMenuViewport, null)
  );
});
NavigationMenu.displayName = NavigationMenuPrimitive__namespace.Root.displayName;
var NavigationMenuList = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    NavigationMenuPrimitive__namespace.List,
    __spreadValues({
      ref,
      className: cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )
    }, props)
  );
});
NavigationMenuList.displayName = NavigationMenuPrimitive__namespace.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive__namespace.Item;
var navigationMenuTriggerStyle = classVarianceAuthority.cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
var NavigationMenuTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    NavigationMenuPrimitive__namespace.Trigger,
    __spreadValues({
      ref,
      className: cn(navigationMenuTriggerStyle(), "group", className)
    }, props),
    children,
    " ",
    /* @__PURE__ */ React36__namespace.createElement(
      lucideReact.ChevronDown,
      {
        className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
        "aria-hidden": "true"
      }
    )
  );
});
NavigationMenuTrigger.displayName = NavigationMenuPrimitive__namespace.Trigger.displayName;
var NavigationMenuContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    NavigationMenuPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
        className
      )
    }, props)
  );
});
NavigationMenuContent.displayName = NavigationMenuPrimitive__namespace.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive__namespace.Link;
var NavigationMenuViewport = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement("div", { className: cn("absolute left-0 top-full flex justify-center") }, /* @__PURE__ */ React36__namespace.createElement(
    NavigationMenuPrimitive__namespace.Viewport,
    __spreadValues({
      className: cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      ),
      ref
    }, props)
  ));
});
NavigationMenuViewport.displayName = NavigationMenuPrimitive__namespace.Viewport.displayName;
var NavigationMenuIndicator = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    NavigationMenuPrimitive__namespace.Indicator,
    __spreadValues({
      ref,
      className: cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  );
});
NavigationMenuIndicator.displayName = NavigationMenuPrimitive__namespace.Indicator.displayName;
var Pagination = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
Pagination.displayName = "Pagination";
var PaginationContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "ul",
    __spreadValues({
      ref,
      className: cn("flex flex-row items-center gap-1", className)
    }, props)
  );
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement("li", __spreadValues({ ref, className: cn("", className) }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = (_a) => {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      )
    }, props)
  );
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    PaginationLink,
    __spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 pl-2.5", className)
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronLeft, { className: "h-4 w-4" }),
    /* @__PURE__ */ React36__namespace.createElement("span", null, "Previous")
  );
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    PaginationLink,
    __spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 pr-2.5", className)
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", null, "Next"),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronRight, { className: "h-4 w-4" })
  );
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "span",
    __spreadValues({
      "aria-hidden": true,
      className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "sr-only" }, "More pages")
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = __objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ React36__namespace.createElement(PopoverPrimitive__namespace.Portal, null, /* @__PURE__ */ React36__namespace.createElement(
    PopoverPrimitive__namespace.Content,
    __spreadValues({
      ref,
      align,
      sideOffset,
      className: cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ));
});
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var Progress = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, value } = _b, props = __objRest(_b, ["className", "value"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ProgressPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(
      ProgressPrimitive__namespace.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  );
});
Progress.displayName = ProgressPrimitive__namespace.Root.displayName;
var RadioGroup4 = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    RadioGroupPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      className: cn("grid gap-2", className)
    }, props), {
      ref
    })
  );
});
RadioGroup4.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    RadioGroupPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }))
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var ResizablePanelGroup = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React.createElement(
    ResizablePrimitive__namespace.PanelGroup,
    __spreadValues({
      className: cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )
    }, props)
  );
};
var ResizablePanel = ResizablePrimitive__namespace.Panel;
var ResizableHandle = (_a) => {
  var _b = _a, {
    withHandle,
    className
  } = _b, props = __objRest(_b, [
    "withHandle",
    "className"
  ]);
  return /* @__PURE__ */ React.createElement(
    ResizablePrimitive__namespace.PanelResizeHandle,
    __spreadValues({
      className: cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )
    }, props),
    withHandle && /* @__PURE__ */ React.createElement("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border" }, /* @__PURE__ */ React.createElement(lucideReact.GripVertical, { className: "h-2.5 w-2.5" }))
  );
};
var ScrollArea = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ScrollAreaPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn("relative overflow-hidden", className)
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]" }, children),
    /* @__PURE__ */ React36__namespace.createElement(ScrollBar, null),
    /* @__PURE__ */ React36__namespace.createElement(ScrollAreaPrimitive__namespace.Corner, null)
  );
});
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
var ScrollBar = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, orientation = "vertical" } = _b, props = __objRest(_b, ["className", "orientation"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ScrollAreaPrimitive__namespace.ScrollAreaScrollbar,
    __spreadValues({
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  );
});
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SelectPrimitive__namespace.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(SelectPrimitive__namespace.Icon, { asChild: true }, /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronDown, { className: "h-4 w-4 opacity-50" }))
  );
});
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SelectPrimitive__namespace.ScrollUpButton,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronUp, { className: "h-4 w-4" })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SelectPrimitive__namespace.ScrollDownButton,
    __spreadValues({
      ref,
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.ChevronDown, { className: "h-4 w-4" })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = __objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ React36__namespace.createElement(SelectPrimitive__namespace.Portal, null, /* @__PURE__ */ React36__namespace.createElement(
    SelectPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React36__namespace.createElement(
      SelectPrimitive__namespace.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )
      },
      children
    ),
    /* @__PURE__ */ React36__namespace.createElement(SelectScrollDownButton, null)
  ));
});
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SelectPrimitive__namespace.Label,
    __spreadValues({
      ref,
      className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SelectPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React36__namespace.createElement(SelectPrimitive__namespace.ItemIndicator, null, /* @__PURE__ */ React36__namespace.createElement(lucideReact.Check, { className: "h-4 w-4" }))),
    /* @__PURE__ */ React36__namespace.createElement(SelectPrimitive__namespace.ItemText, null, children)
  );
});
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SelectPrimitive__namespace.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Separator5 = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation = "horizontal", decorative = true } = _b, props = __objRest(_b, ["className", "orientation", "decorative"]);
    return /* @__PURE__ */ React36__namespace.createElement(
      SeparatorPrimitive__namespace.Root,
      __spreadValues({
        ref,
        decorative,
        orientation,
        className: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      }, props)
    );
  }
);
Separator5.displayName = SeparatorPrimitive__namespace.Root.displayName;
var Sheet = DialogPrimitive__namespace.Root;
var SheetTrigger = DialogPrimitive__namespace.Trigger;
var SheetClose = DialogPrimitive__namespace.Close;
var SheetPortal = DialogPrimitive__namespace.Portal;
var SheetOverlay = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Overlay,
    __spreadProps(__spreadValues({
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props), {
      ref
    })
  );
});
SheetOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var sheetVariants = classVarianceAuthority.cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
var SheetContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children } = _b, props = __objRest(_b, ["side", "className", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(SheetPortal, null, /* @__PURE__ */ React36__namespace.createElement(SheetOverlay, null), /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(sheetVariants({ side }), className)
    }, props),
    children,
    /* @__PURE__ */ React36__namespace.createElement(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, /* @__PURE__ */ React36__namespace.createElement(lucideReact.X, { className: "h-4 w-4" }), /* @__PURE__ */ React36__namespace.createElement("span", { className: "sr-only" }, "Close"))
  ));
});
SheetContent.displayName = DialogPrimitive__namespace.Content.displayName;
var SheetHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )
    }, props)
  );
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold text-foreground", className)
    }, props)
  );
});
SheetTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var SheetDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    DialogPrimitive__namespace.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
SheetDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React36__namespace.useState(void 0);
  React36__namespace.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// components/ui/skeleton.tsx
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React.createElement(
    "div",
    __spreadValues({
      className: cn("animate-pulse rounded-md bg-muted", className)
    }, props)
  );
}
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip2 = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    TooltipPrimitive__namespace.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;

// components/ui/sidebar.tsx
var SIDEBAR_COOKIE_NAME = "sidebar:state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React36__namespace.createContext(null);
function useSidebar() {
  const context = React36__namespace.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
var SidebarProvider = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children
    } = _b, props = __objRest(_b, [
      "defaultOpen",
      "open",
      "onOpenChange",
      "className",
      "style",
      "children"
    ]);
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React36__namespace.useState(false);
    const [_open, _setOpen] = React36__namespace.useState(defaultOpen);
    const open = openProp != null ? openProp : _open;
    const setOpen = React36__namespace.useCallback(
      (value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );
    const toggleSidebar = React36__namespace.useCallback(() => {
      return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
    }, [isMobile, setOpen, setOpenMobile]);
    React36__namespace.useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = React36__namespace.useMemo(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );
    return /* @__PURE__ */ React36__namespace.createElement(SidebarContext.Provider, { value: contextValue }, /* @__PURE__ */ React36__namespace.createElement(TooltipProvider, { delayDuration: 0 }, /* @__PURE__ */ React36__namespace.createElement(
      "div",
      __spreadValues({
        style: __spreadValues({
          "--sidebar-width": SIDEBAR_WIDTH,
          "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
        }, style),
        className: cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
          className
        ),
        ref
      }, props),
      children
    )));
  }
);
SidebarProvider.displayName = "SidebarProvider";
var Sidebar = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children
    } = _b, props = __objRest(_b, [
      "side",
      "variant",
      "collapsible",
      "className",
      "children"
    ]);
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
      return /* @__PURE__ */ React36__namespace.createElement(
        "div",
        __spreadValues({
          className: cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          ),
          ref
        }, props),
        children
      );
    }
    if (isMobile) {
      return /* @__PURE__ */ React36__namespace.createElement(Sheet, __spreadValues({ open: openMobile, onOpenChange: setOpenMobile }, props), /* @__PURE__ */ React36__namespace.createElement(
        SheetContent,
        {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: {
            "--sidebar-width": SIDEBAR_WIDTH_MOBILE
          },
          side
        },
        /* @__PURE__ */ React36__namespace.createElement("div", { className: "flex h-full w-full flex-col" }, children)
      ));
    }
    return /* @__PURE__ */ React36__namespace.createElement(
      "div",
      {
        ref,
        className: "group peer hidden md:block text-sidebar-foreground",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side
      },
      /* @__PURE__ */ React36__namespace.createElement(
        "div",
        {
          className: cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )
        }
      ),
      /* @__PURE__ */ React36__namespace.createElement(
        "div",
        __spreadValues({
          className: cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )
        }, props),
        /* @__PURE__ */ React36__namespace.createElement(
          "div",
          {
            "data-sidebar": "sidebar",
            className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          },
          children
        )
      )
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, onClick } = _b, props = __objRest(_b, ["className", "onClick"]);
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ React36__namespace.createElement(
    Button,
    __spreadValues({
      ref,
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      }
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.PanelLeft, null),
    /* @__PURE__ */ React36__namespace.createElement("span", { className: "sr-only" }, "Toggle Sidebar")
  );
});
SidebarTrigger.displayName = "SidebarTrigger";
var SidebarRail = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ React36__namespace.createElement(
    "button",
    __spreadValues({
      ref,
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )
    }, props)
  );
});
SidebarRail.displayName = "SidebarRail";
var SidebarInset = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "main",
    __spreadValues({
      ref,
      className: cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className
      )
    }, props)
  );
});
SidebarInset.displayName = "SidebarInset";
var SidebarInput = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    Input,
    __spreadValues({
      ref,
      "data-sidebar": "input",
      className: cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )
    }, props)
  );
});
SidebarInput.displayName = "SidebarInput";
var SidebarHeader = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
});
SidebarHeader.displayName = "SidebarHeader";
var SidebarFooter = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
});
SidebarFooter.displayName = "SidebarFooter";
var SidebarSeparator = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    Separator5,
    __spreadValues({
      ref,
      "data-sidebar": "separator",
      className: cn("mx-2 w-auto bg-sidebar-border", className)
    }, props)
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
var SidebarContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )
    }, props)
  );
});
SidebarContent.displayName = "SidebarContent";
var SidebarGroup = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className)
    }, props)
  );
});
SidebarGroup.displayName = "SidebarGroup";
var SidebarGroupLabel = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, asChild = false } = _b, props = __objRest(_b, ["className", "asChild"]);
  const Comp = asChild ? reactSlot.Slot : "div";
  return /* @__PURE__ */ React36__namespace.createElement(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "group-label",
      className: cn(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )
    }, props)
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";
var SidebarGroupAction = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, asChild = false } = _b, props = __objRest(_b, ["className", "asChild"]);
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ React36__namespace.createElement(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "group-action",
      className: cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";
var SidebarGroupContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className)
    }, props)
  );
});
SidebarGroupContent.displayName = "SidebarGroupContent";
var SidebarMenu = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "ul",
    __spreadValues({
      ref,
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className)
    }, props)
  );
});
SidebarMenu.displayName = "SidebarMenu";
var SidebarMenuItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "li",
    __spreadValues({
      ref,
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className)
    }, props)
  );
});
SidebarMenuItem.displayName = "SidebarMenuItem";
var sidebarMenuButtonVariants = classVarianceAuthority.cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var SidebarMenuButton = React36__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className
    } = _b, props = __objRest(_b, [
      "asChild",
      "isActive",
      "variant",
      "size",
      "tooltip",
      "className"
    ]);
    const Comp = asChild ? reactSlot.Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = /* @__PURE__ */ React36__namespace.createElement(
      Comp,
      __spreadValues({
        ref,
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: cn(sidebarMenuButtonVariants({ variant, size }), className)
      }, props)
    );
    if (!tooltip) {
      return button;
    }
    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip
      };
    }
    return /* @__PURE__ */ React36__namespace.createElement(Tooltip2, null, /* @__PURE__ */ React36__namespace.createElement(TooltipTrigger, { asChild: true }, button), /* @__PURE__ */ React36__namespace.createElement(
      TooltipContent,
      __spreadValues({
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile
      }, tooltip)
    ));
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";
var SidebarMenuAction = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, asChild = false, showOnHover = false } = _b, props = __objRest(_b, ["className", "asChild", "showOnHover"]);
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ React36__namespace.createElement(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "menu-action",
      className: cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className
      )
    }, props)
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";
var SidebarMenuBadge = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "menu-badge",
      className: cn(
        "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
});
SidebarMenuBadge.displayName = "SidebarMenuBadge";
var SidebarMenuSkeleton = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, showIcon = false } = _b, props = __objRest(_b, ["className", "showIcon"]);
  const width = React36__namespace.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ React36__namespace.createElement(
    "div",
    __spreadValues({
      ref,
      "data-sidebar": "menu-skeleton",
      className: cn("rounded-md h-8 flex gap-2 px-2 items-center", className)
    }, props),
    showIcon && /* @__PURE__ */ React36__namespace.createElement(
      Skeleton,
      {
        className: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      }
    ),
    /* @__PURE__ */ React36__namespace.createElement(
      Skeleton,
      {
        className: "h-4 flex-1 max-w-[--skeleton-width]",
        "data-sidebar": "menu-skeleton-text",
        style: {
          "--skeleton-width": width
        }
      }
    )
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";
var SidebarMenuSub = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "ul",
    __spreadValues({
      ref,
      "data-sidebar": "menu-sub",
      className: cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
});
SidebarMenuSub.displayName = "SidebarMenuSub";
var SidebarMenuSubItem = React36__namespace.forwardRef((_a, ref) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React36__namespace.createElement("li", __spreadValues({ ref }, props));
});
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";
var SidebarMenuSubButton = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { asChild = false, size = "md", isActive, className } = _b, props = __objRest(_b, ["asChild", "size", "isActive", "className"]);
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ React36__namespace.createElement(
    Comp,
    __spreadValues({
      ref,
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";
var Slider = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SliderPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(SliderPrimitive__namespace.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary" }, /* @__PURE__ */ React36__namespace.createElement(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-primary" })),
    /* @__PURE__ */ React36__namespace.createElement(SliderPrimitive__namespace.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
  );
});
Slider.displayName = SliderPrimitive__namespace.Root.displayName;
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  const { theme = "system" } = nextThemes.useTheme();
  return /* @__PURE__ */ React.createElement(
    sonner.Toaster,
    __spreadValues({
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }
    }, props)
  );
};
var Switch = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    SwitchPrimitives__namespace.Root,
    __spreadProps(__spreadValues({
      className: cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )
    }, props), {
      ref
    }),
    /* @__PURE__ */ React36__namespace.createElement(
      SwitchPrimitives__namespace.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  );
});
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;
var Table = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement("div", { className: "relative w-full overflow-auto" }, /* @__PURE__ */ React36__namespace.createElement(
    "table",
    __spreadValues({
      ref,
      className: cn("w-full caption-bottom text-sm", className)
    }, props)
  ));
});
Table.displayName = "Table";
var TableHeader = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement("thead", __spreadValues({ ref, className: cn("[&_tr]:border-b", className) }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "tbody",
    __spreadValues({
      ref,
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
});
TableBody.displayName = "TableBody";
var TableFooter = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "tfoot",
    __spreadValues({
      ref,
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )
    }, props)
  );
});
TableFooter.displayName = "TableFooter";
var TableRow = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "tr",
    __spreadValues({
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )
    }, props)
  );
});
TableRow.displayName = "TableRow";
var TableHead = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "th",
    __spreadValues({
      ref,
      className: cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      )
    }, props)
  );
});
TableHead.displayName = "TableHead";
var TableCell = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "td",
    __spreadValues({
      ref,
      className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)
    }, props)
  );
});
TableCell.displayName = "TableCell";
var TableCaption = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "caption",
    __spreadValues({
      ref,
      className: cn("mt-4 text-sm text-muted-foreground", className)
    }, props)
  );
});
TableCaption.displayName = "TableCaption";
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    TabsPrimitive__namespace.List,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    TabsPrimitive__namespace.Trigger,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    TabsPrimitive__namespace.Content,
    __spreadValues({
      ref,
      className: cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var Textarea = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    "textarea",
    __spreadValues({
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref
    }, props)
  );
});
Textarea.displayName = "Textarea";
var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToastPrimitives__namespace.Viewport,
    __spreadValues({
      ref,
      className: cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )
    }, props)
  );
});
ToastViewport.displayName = ToastPrimitives__namespace.Viewport.displayName;
var toastVariants = classVarianceAuthority.cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToastPrimitives__namespace.Root,
    __spreadValues({
      ref,
      className: cn(toastVariants({ variant }), className)
    }, props)
  );
});
Toast.displayName = ToastPrimitives__namespace.Root.displayName;
var ToastAction = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToastPrimitives__namespace.Action,
    __spreadValues({
      ref,
      className: cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )
    }, props)
  );
});
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToastPrimitives__namespace.Close,
    __spreadValues({
      ref,
      className: cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      ),
      "toast-close": ""
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(lucideReact.X, { className: "h-4 w-4" })
  );
});
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToastPrimitives__namespace.Title,
    __spreadValues({
      ref,
      className: cn("text-sm font-semibold", className)
    }, props)
  );
});
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToastPrimitives__namespace.Description,
    __spreadValues({
      ref,
      className: cn("text-sm opacity-90", className)
    }, props)
  );
});
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;
var toggleVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    TogglePrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn(toggleVariants({ variant, size, className }))
    }, props)
  );
});
Toggle.displayName = TogglePrimitive__namespace.Root.displayName;
var ToggleGroupContext = React36__namespace.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size, children } = _b, props = __objRest(_b, ["className", "variant", "size", "children"]);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToggleGroupPrimitive__namespace.Root,
    __spreadValues({
      ref,
      className: cn("flex items-center justify-center gap-1", className)
    }, props),
    /* @__PURE__ */ React36__namespace.createElement(ToggleGroupContext.Provider, { value: { variant, size } }, children)
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive__namespace.Root.displayName;
var ToggleGroupItem = React36__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, variant, size } = _b, props = __objRest(_b, ["className", "children", "variant", "size"]);
  const context = React36__namespace.useContext(ToggleGroupContext);
  return /* @__PURE__ */ React36__namespace.createElement(
    ToggleGroupPrimitive__namespace.Item,
    __spreadValues({
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      )
    }, props),
    children
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive__namespace.Item.displayName;
var MOBILE_BREAKPOINT2 = 768;
function useIsMobile2() {
  const [isMobile, setIsMobile] = React36__namespace.useState(void 0);
  React36__namespace.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT2 - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT2);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT2);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return __spreadProps(__spreadValues({}, state), {
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      });
    case "UPDATE_TOAST":
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? __spreadValues(__spreadValues({}, t), action.toast) : t
        )
      });
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? __spreadProps(__spreadValues({}, t), {
            open: false
          }) : t
        )
      });
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return __spreadProps(__spreadValues({}, state), {
          toasts: []
        });
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      });
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast(_a) {
  var props = __objRest(_a, []);
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: __spreadProps(__spreadValues({}, props2), { id })
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: __spreadProps(__spreadValues({}, props), {
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    })
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React36__namespace.useState(memoryState);
  React36__namespace.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return __spreadProps(__spreadValues({}, state), {
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  });
}

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogContent = AlertDialogContent;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogFooter = AlertDialogFooter;
exports.AlertDialogHeader = AlertDialogHeader;
exports.AlertDialogOverlay = AlertDialogOverlay;
exports.AlertDialogPortal = AlertDialogPortal;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertDialogTrigger = AlertDialogTrigger;
exports.AlertTitle = AlertTitle;
exports.AspectRatio = AspectRatio;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Carousel = Carousel;
exports.CarouselContent = CarouselContent;
exports.CarouselItem = CarouselItem;
exports.CarouselNext = CarouselNext;
exports.CarouselPrevious = CarouselPrevious;
exports.ChartContainer = ChartContainer;
exports.ChartLegend = ChartLegend;
exports.ChartLegendContent = ChartLegendContent;
exports.ChartStyle = ChartStyle;
exports.ChartTooltip = ChartTooltip;
exports.ChartTooltipContent = ChartTooltipContent;
exports.Checkbox = Checkbox;
exports.Collapsible = Collapsible;
exports.CollapsibleContent = CollapsibleContent2;
exports.CollapsibleTrigger = CollapsibleTrigger2;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.ContextMenu = ContextMenu;
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
exports.ContextMenuContent = ContextMenuContent;
exports.ContextMenuGroup = ContextMenuGroup;
exports.ContextMenuItem = ContextMenuItem;
exports.ContextMenuLabel = ContextMenuLabel;
exports.ContextMenuPortal = ContextMenuPortal;
exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
exports.ContextMenuRadioItem = ContextMenuRadioItem;
exports.ContextMenuSeparator = ContextMenuSeparator;
exports.ContextMenuShortcut = ContextMenuShortcut;
exports.ContextMenuSub = ContextMenuSub;
exports.ContextMenuSubContent = ContextMenuSubContent;
exports.ContextMenuSubTrigger = ContextMenuSubTrigger;
exports.ContextMenuTrigger = ContextMenuTrigger;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.Drawer = Drawer;
exports.DrawerClose = DrawerClose;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerOverlay = DrawerOverlay;
exports.DrawerPortal = DrawerPortal;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.HoverCard = HoverCard;
exports.HoverCardContent = HoverCardContent;
exports.HoverCardTrigger = HoverCardTrigger;
exports.Input = Input;
exports.InputOTP = InputOTP;
exports.InputOTPGroup = InputOTPGroup;
exports.InputOTPSeparator = InputOTPSeparator;
exports.InputOTPSlot = InputOTPSlot;
exports.Label = Label3;
exports.Menubar = Menubar;
exports.MenubarCheckboxItem = MenubarCheckboxItem;
exports.MenubarContent = MenubarContent;
exports.MenubarGroup = MenubarGroup;
exports.MenubarItem = MenubarItem;
exports.MenubarLabel = MenubarLabel;
exports.MenubarMenu = MenubarMenu;
exports.MenubarPortal = MenubarPortal;
exports.MenubarRadioGroup = MenubarRadioGroup;
exports.MenubarRadioItem = MenubarRadioItem;
exports.MenubarSeparator = MenubarSeparator;
exports.MenubarShortcut = MenubarShortcut;
exports.MenubarSub = MenubarSub;
exports.MenubarSubContent = MenubarSubContent;
exports.MenubarSubTrigger = MenubarSubTrigger;
exports.MenubarTrigger = MenubarTrigger;
exports.NavigationMenu = NavigationMenu;
exports.NavigationMenuContent = NavigationMenuContent;
exports.NavigationMenuIndicator = NavigationMenuIndicator;
exports.NavigationMenuItem = NavigationMenuItem;
exports.NavigationMenuLink = NavigationMenuLink;
exports.NavigationMenuList = NavigationMenuList;
exports.NavigationMenuTrigger = NavigationMenuTrigger;
exports.NavigationMenuViewport = NavigationMenuViewport;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup4;
exports.RadioGroupItem = RadioGroupItem;
exports.ResizableHandle = ResizableHandle;
exports.ResizablePanel = ResizablePanel;
exports.ResizablePanelGroup = ResizablePanelGroup;
exports.ScrollArea = ScrollArea;
exports.ScrollBar = ScrollBar;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Separator = Separator5;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Sidebar = Sidebar;
exports.SidebarContent = SidebarContent;
exports.SidebarFooter = SidebarFooter;
exports.SidebarGroup = SidebarGroup;
exports.SidebarGroupAction = SidebarGroupAction;
exports.SidebarGroupContent = SidebarGroupContent;
exports.SidebarGroupLabel = SidebarGroupLabel;
exports.SidebarHeader = SidebarHeader;
exports.SidebarInput = SidebarInput;
exports.SidebarInset = SidebarInset;
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenuAction = SidebarMenuAction;
exports.SidebarMenuBadge = SidebarMenuBadge;
exports.SidebarMenuButton = SidebarMenuButton;
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarMenuSkeleton = SidebarMenuSkeleton;
exports.SidebarMenuSub = SidebarMenuSub;
exports.SidebarMenuSubButton = SidebarMenuSubButton;
exports.SidebarMenuSubItem = SidebarMenuSubItem;
exports.SidebarProvider = SidebarProvider;
exports.SidebarRail = SidebarRail;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarTrigger = SidebarTrigger;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Textarea = Textarea;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastDescription = ToastDescription;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Toaster = Toaster;
exports.Toggle = Toggle;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Tooltip = Tooltip2;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.components = components_default;
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
exports.reducer = reducer;
exports.tailwindConfig = tailwind_config_default;
exports.toast = toast;
exports.toggleVariants = toggleVariants;
exports.useFormField = useFormField;
exports.useIsMobile = useIsMobile2;
exports.useSidebar = useSidebar;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
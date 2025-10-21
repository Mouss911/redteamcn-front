import { PageHeader } from "../../../components/PageHeader";
import { FrameworkCard, type Framework } from "../../../components/FrameworkCard";

const frameworks: Framework[] = [
    {
        id: "react js",
        name: "React Js",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="text-sm me-0 w-10 h-10 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out" fill="none" height="100%" viewBox="-10.5 -9.45 21 18.9" width="100%"><circle cx="0" cy="0" fill="currentColor" r="2"/> <defs>
            <linearGradient id="python-gradient-1" x1="63.8159" y1="56.6829" x2="118.4934" y2="1.8225" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)">
              <stop offset="0" stopColor="#000000"/>
              <stop offset="1" stopColor="#000000"/>
            </linearGradient>
            <linearGradient id="python-gradient-2" x1="97.0444" y1="21.6321" x2="155.6665" y2="-34.5308" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)">
              <stop offset="0" stopColor="#000000"/>
              <stop offset="1" stopColor="#000000"/>
            </linearGradient>
          </defs><g fill="none" stroke="currentColor" stroke-width="1"><ellipse rx="10" ry="4.5"/><ellipse rx="10" ry="4.5" transform="rotate(60)"/><ellipse rx="10" ry="4.5" transform="rotate(120)"/></g></svg>
        ),
      },
  {
    id: "laravel",
    name: "Laravel",
    icon: (
     <svg role="img" viewBox="0 0 62 65" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"></path></svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        viewBox="0 0 110 110" 
        className="h-10 w-10"
        fill="currentColor"
      >
        <defs>
          <linearGradient id="python-gradient-1" x1="63.8159" y1="56.6829" x2="118.4934" y2="1.8225" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)">
            <stop offset="0" stopColor="#000000"/>
            <stop offset="1" stopColor="#000000"/>
          </linearGradient>
          <linearGradient id="python-gradient-2" x1="97.0444" y1="21.6321" x2="155.6665" y2="-34.5308" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)">
            <stop offset="0" stopColor="#000000"/>
            <stop offset="1" stopColor="#000000"/>
          </linearGradient>
        </defs>
        <path fill="url(#python-gradient-1)" d="M55.023-0.077c-25.971,0-26.25,10.081-26.25,12.156c0,3.148,0,12.594,0,12.594h26.75v3.781 c0,0-27.852,0-37.375,0c-7.949,0-17.938,4.833-17.938,26.25c0,19.673,7.792,27.281,15.656,27.281c2.335,0,9.344,0,9.344,0 s0-9.765,0-13.125c0-5.491,2.721-15.656,15.406-15.656c15.91,0,19.971,0,26.531,0c3.902,0,14.906-1.696,14.906-14.406 c0-13.452,0-17.89,0-24.219C82.054,11.426,81.515-0.077,55.023-0.077z M40.273,8.392c2.662,0,4.813,2.15,4.813,4.813 c0,2.661-2.151,4.813-4.813,4.813s-4.813-2.151-4.813-4.813C35.46,10.542,37.611,8.392,40.273,8.392z"/>
        <path fill="url(#python-gradient-2)" d="M55.397,109.923c25.959,0,26.282-10.271,26.282-12.156c0-3.148,0-12.594,0-12.594H54.897v-3.781 c0,0,28.032,0,37.375,0c8.009,0,17.938-4.954,17.938-26.25c0-23.322-10.538-27.281-15.656-27.281c-2.336,0-9.344,0-9.344,0 s0,10.216,0,13.125c0,5.491-2.631,15.656-15.406,15.656c-15.91,0-19.476,0-26.532,0c-3.892,0-14.906,1.896-14.906,14.406 c0,14.475,0,18.265,0,24.219C28.366,100.497,31.562,109.923,55.397,109.923z M70.148,101.454c-2.662,0-4.813-2.15-4.813-4.813c0-2.661,2.151-4.813,4.813-4.813s4.813,2.151,4.813,4.813C74.961,99.304,72.81,101.454,70.148,101.454z"/>
      </svg>
    ),
  }
];

export function DocsPage() {
  const handleFrameworkClick = (frameworkId: string) => {
    console.log("Selected framework:", frameworkId);
  };

  return (
    <div className="space-y-8">
      {/* Header with Create Button */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <PageHeader
            title="Installation"
            description="How to install dependencies and structure your app."
            showCopyButton={true}
            showNavigation={true}
          />
        </div>
      </div>

      {/* Pick Your Framework Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Pick Your Framework</h2>
        <p className="text-muted-foreground">
          Start by selecting your framework of choice. Then follow the instructions to install the
          dependencies and structure your app. shadcn/ui is built to work with all React frameworks.
        </p>
      </div>

      {/* Frameworks Grid */}
      <div className="grid grid-cols-1 text-black gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {frameworks.map((framework) => (
          <FrameworkCard
            key={framework.id}
            framework={framework}
            onClick={() => handleFrameworkClick(framework.id)}
          />
        ))}
      </div>
    </div>
  );
}

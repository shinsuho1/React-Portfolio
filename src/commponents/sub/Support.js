import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Support() {
    const [selectedTab, setselectedTab] = useState("faq");
    const handlingTab = (menu) => {
        setselectedTab(menu);
    };

    const [menuTab, setmenuTab] = useState([]);

    const handleTabClick = (id) => {
        if (menuTab.includes(id)) {
            setmenuTab(menuTab.filter((menuId) => menuId !== id));
        } else {
            setmenuTab([...menuTab, id]);
        }
    };

    return (
        <section className="support">
            <div className="inner">
                <ul className="menu">
                    <li
                        className={selectedTab === "faq" ? "on" : ""}
                        onClick={() => handlingTab("faq")}
                    >
                        FAQ
                    </li>
                    <li
                        className={selectedTab === "qna" ? "on" : ""}
                        onClick={() => handlingTab("qna")}
                    >
                        Q&A
                    </li>
                    <li
                        className={selectedTab === "announcement" ? "on" : ""}
                        onClick={() => handlingTab("announcement")}
                    >
                        Announcement
                    </li>
                </ul>

                <article className={selectedTab === "faq" ? "on" : ""}>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(1)}
                        >
                            <h2
                                className={`${menuTab.includes(1) ? "on" : ""}`}
                            >
                                What is the difference between Office 2021 and
                                Microsoft 365?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(1) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Office 2021 is sold as a one-time purchase,
                                    which means you pay a single, up-front cost
                                    to get Office apps for one computer.
                                    One-time purchases are available for both
                                    PCs and Macs. However, there are no upgrade
                                    options, which means if you plan to upgrade
                                    to the next major release, you'll have to
                                    buy it at full price.
                                </p>
                                <p>
                                    Microsoft 365 is a subscription that
                                    includes the most collaborative, up-to-date
                                    features in one seamless, integrated
                                    experience. Microsoft 365 includes the
                                    robust Office desktop apps that you’re
                                    familiar with, like Word, PowerPoint, and
                                    Excel. You also get extra online storage and
                                    cloud-connected features that let you
                                    collaborate on files in real time. With a
                                    subscription, you'll always have the latest
                                    features, fixes, and security updates along
                                    with ongoing tech support at no extra cost.
                                    You can choose to pay for your subscription
                                    on a monthly or yearly basis, and the
                                    Microsoft 365 Family plan lets you share
                                    your subscription with your family for up to
                                    6 people, and use your apps on multiple PCs,
                                    Macs, tablets, and phones.
                                </p>
                            </div>
                            <p>2023-04-07</p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(2)}
                        >
                            <h2
                                className={`${menuTab.includes(2) ? "on" : ""}`}
                            >
                                How do I know if my PC or Mac can run Microsoft
                                365?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(2) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Microsoft 365 is compatible with PC, Mac,
                                    Android, and iOS. See
                                    <Link to="/support#;">
                                        &nbsp;system requirements&nbsp;
                                    </Link>
                                    for compatible versions of your devices, and
                                    for other feature requirements.
                                </p>
                            </div>
                            <p>2023-04-29</p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(3)}
                        >
                            <h2
                                className={`${menuTab.includes(3) ? "on" : ""}`}
                            >
                                Will Microsoft 365 be identical on a PC and a
                                Mac?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(3) ? "on" : ""
                                }`}
                            >
                                <p>
                                    No. Apps are tailored to work best on each
                                    operating system. The apps available for Mac
                                    users and the specific features included may
                                    be different from those available for PC
                                    users. With Microsoft 365, you can be
                                    flexible. With your account, you are not
                                    limited to exclusively Mac or exclusively
                                    PC, so you can transition across device.
                                </p>
                            </div>
                            <p>2023-05-14</p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(4)}
                        >
                            <h2
                                className={`${menuTab.includes(4) ? "on" : ""}`}
                            >
                                Do I keep control of my documents with a
                                Microsoft 365 subscription?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(4) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Yes. Documents that you have created belong
                                    fully to you. You can choose to store them
                                    online on OneDrive or locally on your PC or
                                    Mac.
                                </p>
                            </div>
                            <p>2023-05-18</p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(5)}
                        >
                            <h2
                                className={`${menuTab.includes(5) ? "on" : ""}`}
                            >
                                Is Internet access required for Microsoft 365?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(5) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Internet access is required to install and
                                    activate all the latest releases of apps and
                                    services included in all Microsoft 365
                                    subscription plans. Note that if you are an
                                    existing subscriber, you do not need to
                                    reinstall or purchase another subscription.
                                </p>
                                <p>
                                    For Microsoft 365 plans, Internet access is
                                    also needed to manage your subscription
                                    account, for example to install apps on
                                    other PCs or to change billing options.
                                    Internet access is also required to access
                                    documents stored on OneDrive, unless you
                                    install the
                                    <Link to="/support#;">
                                        &nbsp;OneDrive desktop app
                                    </Link>
                                    .
                                </p>
                                <p>
                                    You should also connect to the Internet
                                    regularly to keep your version of Microsoft
                                    365 up to date and to benefit from automatic
                                    upgrades. If you do not connect to the
                                    internet at least every 31 days, your apps
                                    will go into reduced functionality mode,
                                    which means that you can view or print your
                                    documents but cannot edit the documents or
                                    create new ones. To reactivate your apps,
                                    simply reconnect to the Internet.
                                </p>
                                <p>
                                    You do not need to be connected to the
                                    Internet to use Office apps such as Word,
                                    Excel, and PowerPoint, because the apps are
                                    fully installed on your computer.
                                </p>
                            </div>
                            <p>2023-07-03</p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(6)}
                        >
                            <h2
                                className={`${menuTab.includes(6) ? "on" : ""}`}
                            >
                                What is a Microsoft account, and why do I need
                                it for Microsoft 365?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(6) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Your Microsoft account is the combination of
                                    an email address and password that you use
                                    to sign in to services like OneDrive, Xbox
                                    LIVE, and Outlook.com. If you use any of
                                    these services, you already have a Microsoft
                                    account that you can use, or you can create
                                    a new account.
                                    <Link to="/support#;">
                                        &nbsp;Learn more about a Microsoft
                                        account
                                    </Link>
                                    .
                                </p>
                                <p>
                                    As part of signing up for a trial or
                                    purchasing Microsoft 365, you will be
                                    prompted to sign in with a Microsoft
                                    account. You must be signed in with this
                                    account to install and manage your Microsoft
                                    365 subscription, or to use some
                                    subscription benefits, including OneDrive
                                    storage.
                                </p>
                            </div>
                            <p>2023-08-07</p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(7)}
                        >
                            <h2
                                className={`${menuTab.includes(7) ? "on" : ""}`}
                            >
                                How many people can use a Microsoft 365
                                subscription?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(7) ? "on" : ""
                                }`}
                            >
                                <p>
                                    You can share Microsoft 365 Family with five
                                    other people, for a total of six users.
                                    Microsoft 365 Personal can be used by one
                                    person.
                                </p>
                            </div>
                            <p>2023-08-09</p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(8)}
                        >
                            <h2
                                className={`${menuTab.includes(8) ? "on" : ""}`}
                            >
                                How do I share my subscription benefits with
                                other people?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(8) ? "on" : ""
                                }`}
                            >
                                <p>
                                    If you have an active Microsoft 365 Family
                                    subscription, you can share it with up to
                                    five other people. Each person you share
                                    your subscription with can install Microsoft
                                    365 on all their devices and sign in to five
                                    devices at the same time.
                                </p>
                                <p>
                                    To add someone to your subscription, visit
                                    <Link to="/support#;">
                                        &nbsp;account.microsoft.com&nbsp;
                                    </Link>
                                    and follow the on-screen instructions to add
                                    a user. Each person you add will receive an
                                    email with the steps they need to follow.
                                    Once they have accepted and completed the
                                    steps, their information, including the
                                    installs they are using, will appear on
                                    their My Account page. You can stop sharing
                                    your subscription with someone or remove a
                                    device they are using at
                                    <Link to="/support#;">
                                        &nbsp;account.microsoft.com
                                    </Link>
                                    .
                                </p>
                            </div>
                            <p>2023-09-07</p>
                        </div>
                    </article>
                </article>

                <article className={selectedTab === "qna" ? "on" : ""}>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(9)}
                        >
                            <h2
                                className={`${menuTab.includes(9) ? "on" : ""}`}
                            >
                                Opening the new form and closing the previous
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(9) ? "on" : ""
                                }`}
                            >
                                <p>
                                    In my project i am stuck at a point and can
                                    not figure out how to open a new form inside
                                    a panel of already opened form . So there is
                                    a form named father and it has a panel . i
                                    am using this panel to open all subsequent
                                    forms (children) . there are two problems i
                                    am facing
                                </p>
                                <p>
                                    before the new form is opened , i have to
                                    check whether a new form is already opened
                                    or not inside the fathers panel . if yes a
                                    form is already opened inside panel , it
                                    should close first and then only the new
                                    child can open .
                                </p>
                            </div>
                            <p>
                                2023-09-22<span>Mikayla</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(10)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(10) ? "on" : ""
                                }`}
                            >
                                Microphone is not working
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(10) ? "on" : ""
                                }`}
                            >
                                <p>permanent footer row in datagridview</p>
                                <p>
                                    hi, is there a way by which our datagridview
                                    control could have a footer row below
                                    exactly after the 12 rows and if the rows in
                                    the datagridview increases , suppose by 2 .
                                    it should always be at last position but it
                                    always should be after 12 rows . the data is
                                    coming from a dataset .
                                </p>
                                <h3>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    Accepted answer
                                </h3>
                                <p className="answer">
                                    There are semi decent solutions out there
                                    such as found here but they and others do
                                    not account for sorting. Perhaps consider
                                    placing a second DataGridView below the
                                    first DataGridView, hide the row and column
                                    headers and use this for your footer or
                                    place labels below the main DataGridView and
                                    update as needed.
                                </p>
                            </div>
                            <p>
                                2023-09-10<span>Melissa</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(11)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(11) ? "on" : ""
                                }`}
                            >
                                Request Violates Guidelines
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(11) ? "on" : ""
                                }`}
                            >
                                <p>
                                    I'm sorry, but your request contains
                                    inappropriate content. As an AI assistant, I
                                    cannot assist with requests that go against
                                    our community guidelines, safety, or ethical
                                    standards. Please refrain from asking these
                                    types of questions.
                                </p>
                            </div>
                            <p>
                                2023-08-10<span>Victoria</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(12)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(12) ? "on" : ""
                                }`}
                            >
                                What is the difference between SharePoint and
                                OneDrive?
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(12) ? "on" : ""
                                }`}
                            >
                                <p>
                                    When I upload a file through an MS Teams
                                    Channel chat, I can see the File in the
                                    Files tab. I can also access these Files
                                    through SharePoint, Ms Teams and OneDrive in
                                    the Microsoft365 suite.
                                </p>
                                <p>
                                    Where exactly are these files stored? Are
                                    they stored in OneDrive?
                                    <br />
                                    According to this
                                    <Link to="https://social.msdn.microsoft.com/Forums/en-US/89a9d813-1162-43c5-9421-ffd3f8f8aabf/where-are-the-files-collaborated-in-teams-saved?forum=msteams">
                                        &nbsp;https://social.msdn.microsoft.com/Forums/en-US/89a9d813-1162-43c5-9421-ffd3f8f8aabf/where-are-the-files-collaborated-in-teams-saved?forum=msteams
                                    </Link>
                                </p>

                                <p>
                                    Files that you share in a channel are stored
                                    in your team's SharePoint folder.
                                    <br />
                                    Files that you share in a private or group
                                    chat are stored in your OneDrive for
                                    Business folder and are only shared with the
                                    people in that conversation.
                                </p>
                                <p>
                                    That's fine, but I still don't understand
                                    what the difference between SP and OneDrive
                                    is? It seems like they both store files?
                                </p>
                                <h3>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    Accepted answer
                                </h3>
                                <p className="answer">
                                    I have a related question. My company uses a
                                    SharePoint team site, which is also visible
                                    in my OneDrive Shared Folders on my windows
                                    laptop. I also access this on my iPhone
                                    using the OneDrive app. The problem we’ve
                                    just discovered is that when I use my
                                    windows laptop and save a file in the shared
                                    Onedrive, it’s not visible to the team on
                                    the SharePoint team site. This problem
                                    doesn’t happen though using my iPhone app;
                                    if I upload a file to the shared Onedrive on
                                    the iPhone it appears on the Team SharePoint
                                    no problem. this situation now means I can
                                    continue using Onedrive on my phone, but on
                                    my windows laptop I absolutely must use
                                    SharePoint. I’d prefer to just use OneDrive
                                    on my PC, but what doesn’t it also save to
                                    the collaborative SharePoint site?
                                </p>
                            </div>
                            <p>
                                2023-08-09<span>Agatha</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(13)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(13) ? "on" : ""
                                }`}
                            >
                                ASP.NET CORE WEBAPI Bearer Token
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(13) ? "on" : ""
                                }`}
                            >
                                <p>
                                    This api
                                    <Link to="https://visitsapi.azurewebsites.net/api/Visits">
                                        &nbsp;https://visitsapi.azurewebsites.net/api/Visits&nbsp;
                                    </Link>
                                    ㅣ
                                    <Link to="https://github.com/KalyanAllam/VisitsApi">
                                        &nbsp;https://github.com/KalyanAllam/VisitsApi&nbsp;
                                    </Link>
                                    <br />
                                    is called in the controller Visitsnew of
                                    <Link to="">
                                        &nbsp;https://github.com/KalyanAllam/PatientPortal
                                    </Link>
                                </p>
                                <p>
                                    Now I want to make the api
                                    <Link to="https://visitsapi.azurewebsites.net/api/Visits">
                                        &nbsp;https://visitsapi.azurewebsites.net/api/Visits&nbsp;
                                    </Link>
                                    secure, I like to implement Bearer Token
                                    like JWT please suggest how?
                                </p>
                                <h3>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    Accepted answer
                                </h3>

                                <p className="answer">
                                    1. Install JWT Libraries: In the VisitsApi
                                    project, install the necessary JWT libraries
                                    using NuGet, such as
                                    System.IdentityModel.Tokens.Jwt.
                                    <br /> 2. Configure JWT: In the Startup.cs
                                    file of the VisitsApi project, configure JWT
                                    authentication in the ConfigureServices
                                    method by adding authentication services and
                                    specifying JWT as the default scheme.
                                    <br /> 3. Generate Tokens: Create a method
                                    to generate JWT tokens. This method should
                                    take user credentials, validate them, and
                                    return a JWT token upon successful
                                    validation.
                                    <br /> 4. Protect API Endpoints: Decorate
                                    the API endpoints in the VisitsController
                                    with the [Authorize] attribute to ensure
                                    that they are secured and can only be
                                    accessed with a valid JWT token.
                                    <br /> 5. Client Side Changes: In the
                                    PatientPortal project, modify the Visitsnew
                                    controller to include code for obtaining a
                                    JWT token from the VisitsApi and attach this
                                    token to the HTTP headers for subsequent API
                                    requests.
                                    <br /> 6. Test: Finally, test the secured
                                    API endpoints using tools like Postman by
                                    including the generated JWT token in the
                                    Authorization header.
                                </p>
                            </div>
                            <p>
                                2023-08-05<span>Destiny</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(14)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(14) ? "on" : ""
                                }`}
                            >
                                A Connection To The Remote Computer Could Not Be
                                Established In Windows 10
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(14) ? "on" : ""
                                }`}
                            >
                                <p>
                                    All computers that try to connect to my VM's
                                    VPN Window server 2022 gets this error. I
                                    don't know much about things like this since
                                    I am more of a database developer. I created
                                    a new VM VPN server from scratch using the
                                    same instructions that worked for me
                                    yesterday before the error showed up.
                                    Everything was working perfectly then I
                                    changed the DNS settings on my router
                                    (Changed the range of the IP address pool
                                    .100 to .200) I did this because I set my
                                    VPN server to assign IP addresses from a
                                    static pool of .50 to .99.
                                </p>
                                <p>
                                    I tried: Changing my DNS settings back
                                    Turning off my firewall on server and client
                                    side Uninstalling the WAN mini ports
                                    Ipconfig release, renew, flush Added
                                    AssumeUDPEncapsulationOnSendRule key in the
                                    Windows registry Ran Network Adapter
                                    troubleshooter and Windows Network
                                    Diagnostics with no issues Changed Type of
                                    VPN to Point to Point Tunneling Protocol
                                    (PPTP) from Automatic and checked Challenge
                                    Handshake Authentication Protocol (CHAP) and
                                    Microsoft CHAP Version 2 (MS-CHAP v2)
                                </p>
                                <p>
                                    I am wondering if the issue is on the server
                                    side since I tested 2 computer and both show
                                    that error and can't connect.
                                </p>
                                <h3>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    Accepted answer
                                </h3>
                                <p className="answer">
                                    I was able to solve my problem. The
                                    computers were unable to connect to the VPn
                                    due to incorrect DNS settings on the server.
                                    On the client machine I went to CMD Prompt
                                    ping the host server IP. It said couldn't
                                    reach destination host so on the server I
                                    went to network sharing center. Clicked on
                                    the properties of ethernet then set DNS and
                                    IP to config automatically. Then I deleted
                                    my Virtual switch and tried adding it back.
                                    Got an error saying couldn't add it so I
                                    Reset the Network Connection using the
                                    “netcfg” command. Once that finished I was
                                    able to connect to the VPN!!
                                </p>
                            </div>
                            <p>
                                2023-07-30<span>Elizabeth</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(15)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(15) ? "on" : ""
                                }`}
                            >
                                Windows 11 Drag and Drop Files to Folders Not
                                Working
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(15) ? "on" : ""
                                }`}
                            >
                                <p>
                                    This is not the issue of dragging to the
                                    taskbar. For some reason, I just can't drag
                                    and drop my files between folders or other
                                    windows. My Windows 11 is fully updated, and
                                    I have no idea if there is anything running
                                    on my computer that would cause this. I have
                                    tried several things that I saw online to no
                                    avail.
                                </p>
                                <p>
                                    If I restart my computer, it works for a few
                                    hours. Then, it suddenly stops again. I
                                    cannot figure out why. This is really
                                    impacting my job efficiency. Can anyone
                                    please help me figure out why this could be
                                    happening?
                                </p>
                            </div>
                            <p>
                                2023-07-30<span>Arthur</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(16)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(16) ? "on" : ""
                                }`}
                            >
                                Output to Blazor backend from Azure deployed AI
                                model
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(16) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Hi, We need to get the output of an AI model
                                    that runs as a managed endpoint in Azure to
                                    our Blazor backend.
                                </p>
                                <p>What is the best way to do that?</p>
                                <p>
                                    Is there a way to send the output from the
                                    AI model to the Blazor backend once it is
                                    ready? If yes, how exactly is that done (we
                                    need a handle of the Blazor backend to send
                                    to)?
                                </p>
                                <p>
                                    Is it possible to send a Restful call to the
                                    AI model from the Blazor backend?, Regards,
                                </p>
                                <h3>
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                    Accepted answer
                                </h3>
                                <p className="answer">
                                    There are a few ways to send output from an
                                    Azure AI model to a Blazor backend. One way
                                    is to use a RESTful API. You can deploy the
                                    AI model as a web service and then call the
                                    web service from your Blazor backend.
                                    Another way is to use Azure SignalR. You can
                                    create a SignalR hub on your Blazor backend
                                    and then connect to the hub from the AI
                                    model. Once the AI model is connected to the
                                    hub, it can send output to the Blazor
                                    backend by calling methods on the hub.
                                </p>
                            </div>
                            <p>
                                2023-07-27<span>Lizzle</span>
                            </p>
                        </div>
                    </article>
                </article>

                <article className={selectedTab === "announcement" ? "on" : ""}>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(17)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(17) ? "on" : ""
                                }`}
                            >
                                Streamline supplier engagement with the new ESG
                                value chain solution
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(17) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Solving scope 3 carbon measurement requires
                                    a collaborative approach, since up to 90
                                    percent of an average company’s resource
                                    footprint occurs in the value chain—upstream
                                    or downstream of their own operations.1 Most
                                    organizations don’t currently have access to
                                    the data they need to do this. Without data,
                                    they can’t know the full extent of their
                                    carbon footprint, and they won’t know how to
                                    fix it.
                                </p>
                                <p>
                                    Transparency is consistently a challenge.
                                    Organizations need better visibility into
                                    the environmental footprint of their entire
                                    operations, products, and value chain.
                                    They’ll be required to report on not only
                                    their own sustainability impact but also
                                    that of their value chain partners (any
                                    third party with whom you do business or are
                                    otherwise invested and from whom you need to
                                    collect data). But data is difficult to
                                    collect, especially data that comes from
                                    suppliers or other partners outside the
                                    organization.
                                </p>
                                <p>
                                    Digital technologies are helping
                                    organizations facilitate greater
                                    transparency and accountability through
                                    their value chain, from raw materials to
                                    product creation to distribution. A
                                    data-first approach can help drive
                                    efficiency, reduce emissions, and design out
                                    waste.
                                </p>
                                <p>
                                    <Link to="/support#;">
                                        Microsoft Cloud for Sustainability&nbsp;
                                    </Link>
                                    solutions help organizations gain more
                                    visibility into sustainability activities
                                    through their value chain. The new
                                    <Link to="/support#;">
                                        &nbsp;ESG value chain solution&nbsp;
                                    </Link>
                                    can help organizations increase transparency
                                    and collect more reliable and accurate
                                    information from suppliers up and down their
                                    value chain.
                                </p>
                                <h4>
                                    Empowering organizations with a streamlined
                                    experience for collecting data from
                                    suppliers
                                </h4>
                                <p>
                                    Now in preview, the environmental, social,
                                    and governance (ESG) value chain solution
                                    enables you to gather data directly from
                                    your value chain partners and use that data
                                    to calculate your scope 3 emissions. You can
                                    also gather product carbon footprint (PCF)
                                    data directly from your suppliers using this
                                    feature. (PCF is the total greenhouse gas
                                    protocol (GHG) emissions generated during
                                    the lifecycle of a product measured in
                                    CO2e). While the initial release is specific
                                    to collecting emissions and PCF data, future
                                    releases will expand functionality to
                                    capture water, waste, and additional ESG
                                    data as well.
                                </p>
                                <p>
                                    The ESG value chain solution, a feature in
                                    <Link to="/support#;">
                                        &nbsp;Microsoft Sustainability
                                        Manager&nbsp;
                                    </Link>
                                    , will enable organizations to collect and
                                    report more detailed data about
                                    sustainability activities from their value
                                    chain partners. With this capability, you
                                    can create surveys and other customized
                                    workflows designed to collect emissions and
                                    ESG data needed for reporting and
                                    science-based target setting and reductions.
                                </p>
                                <p>
                                    This solution streamlines supplier
                                    engagement and is powerful because once the
                                    suppliers’ data is reviewed and approved (by
                                    the organization surveying its suppliers) in
                                    Microsoft Sustainability Manager, it can be
                                    fed right into that organization’s
                                    calculations and reporting.
                                </p>
                            </div>
                            <p>
                                2023-09-02<span>Manager</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(18)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(18) ? "on" : ""
                                }`}
                            >
                                How next-generation AI and digital tools
                                transform the retail frontline
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(18) ? "on" : ""
                                }`}
                            >
                                <p>
                                    2023 has been quite a rollercoaster year for
                                    us in the retail industry. We’ve faced our
                                    share of challenges, from dealing with
                                    economic uncertainties to meeting the
                                    ever-changing demands of our customers. But
                                    the industry has shown incredible resilience
                                    and resourcefulness in the face of it all.
                                </p>
                                <p>
                                    Just take next-generation AI for example. AI
                                    has been making waves in the retail
                                    industry, and it’s no wonder why.
                                    Next-generation AI and a host of other
                                    digital tools have sparked a whirlwind of
                                    innovation, transforming the way retailers
                                    think about how they operate. It’s a story
                                    with two sides—one filled with exciting
                                    possibilities and a few challenges to
                                    tackle.
                                </p>
                                <p>
                                    To thrive in this shifting landscape, we
                                    need our frontline workers more than ever.
                                    They’re the driving force behind the retail
                                    industry’s success. That’s why Microsoft is
                                    committed to
                                    <Link to="/support#;">
                                        &nbsp;Store Operations Assist embedded
                                        in Microsoft Teams&nbsp;
                                    </Link>
                                    that empower these frontline heroes. We’ve
                                    seen strong and consistent double-digit
                                    growth in frontline workers’ monthly active
                                    users of Microsoft Teams in the retail
                                    industry this year.
                                </p>
                                <p>
                                    The magic that happens when technology and
                                    our incredible retail workforce join forces
                                    is transforming the very fabric of our
                                    industry. We’re diving headfirst into the
                                    world of AI and cutting-edge tools, and it’s
                                    like discovering a whole new realm of
                                    efficiency, productivity, and
                                    customer-centricity. With streamlined task
                                    management and automated workflows, our
                                    frontline teams get to dedicate more energy
                                    to what really counts—delivering that
                                    top-notch service that keeps customers
                                    coming back for more.
                                </p>
                                <h4>
                                    Enhancing frontline operational efficiency
                                    with AI and digital tools
                                </h4>
                                <p>
                                    Retail workers have a crucial role in
                                    interacting with customers and keeping
                                    things running smoothly. But all too often,
                                    they face challenges like working
                                    understaffed shifts and dealing with
                                    outdated systems. These obstacles slow down
                                    store operations and prevent store teams
                                    from focusing on the most important parts of
                                    their job.
                                </p>
                                <h4>Digitize routine store processes</h4>
                                <p>
                                    Retailers can leverage
                                    <Link to="/support#;">
                                        &nbsp;Store Operations Assist&nbsp;
                                    </Link>
                                    to equip store associates to better serve
                                    customers, providing teams access to
                                    advanced retail workflows, data, and
                                    insights. Today we’re introducing
                                    <Link to="/support#;">
                                        &nbsp;Store Operations Assist embedded
                                        in Microsoft Teams&nbsp;
                                    </Link>
                                    to make it even easier for store teams to
                                    stay in the flow of work. Store associates
                                    can easily move between Teams and Store
                                    Operations Assist through a shortcut on the
                                    Teams app bar on mobile.
                                </p>
                            </div>
                            <p>
                                2023-08-12<span>Manager</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(19)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(19) ? "on" : ""
                                }`}
                            >
                                How next-generation AI and digital tools are
                                transforming healthcare
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(19) ? "on" : ""
                                }`}
                            >
                                <p>
                                    In the midst of an ever-evolving healthcare
                                    industry with mounting demands, healthcare
                                    frontline workers have emerged as true
                                    champions helping to carry the industry
                                    forward. This year has been a whirlwind of
                                    challenges and uncertainties, but these
                                    remarkable individuals continue to display
                                    unwavering flexibility and perseverance.
                                    They stand at the forefront of patient care,
                                    skillfully navigating the changing landscape
                                    of the industry.
                                </p>
                                <p>
                                    As healthcare providers continue to face a
                                    complex mix of challenges, including severe
                                    financial strain, increasing competition,
                                    clinician burnout, and workforce shortages,
                                    the need to improve outcomes by using
                                    information and technology to enable quality
                                    care is stronger than ever.
                                </p>
                                <p>
                                    Amidst rapid change, the healthcare sector
                                    is embracing adaptability and resilience.
                                    Facilities are rethinking their approaches
                                    and harnessing innovative technologies and
                                    digital tools to streamline processes and
                                    empower healthcare teams to provide
                                    exceptional care. Their ability to adapt in
                                    the face of adversity is nothing short of
                                    inspiring. It has enabled healthcare
                                    providers to maintain a high level of
                                    service despite the most demanding
                                    circumstances.
                                </p>
                                <p>
                                    Providers must also
                                    <Link to="/support#;">
                                        &nbsp;capitalize on digital
                                        technologies&nbsp;
                                    </Link>
                                    to help improve operational efficiencies,
                                    quality of care, and patient satisfaction
                                    and retention, as well as optimize revenue
                                    cycle management.
                                </p>
                                <p>
                                    Tools like Microsoft Teams play a pivotal
                                    role in the transformative journey in
                                    healthcare. For example, healthcare workers
                                    are using Teams as their
                                    <Link to="/support#;">
                                        &nbsp;communications and collaboration
                                        hub
                                    </Link>
                                    , facilitating virtual video visits and
                                    keeping care teams connected. We’ve seen
                                    strong and consistent double-digit growth in
                                    frontline workers’ monthly active users of
                                    Microsoft Teams in the healthcare industry
                                    this year. This highlights the crucial role
                                    digital tools play in shaping the future of
                                    healthcare, fostering seamless operations,
                                    collaboration, and the exchange of vital
                                    health information.
                                </p>
                                <h4>
                                    Enhancing operational efficiency in
                                    healthcare with AI and digital tools
                                </h4>
                                <p>
                                    Between fluctuating team schedules and
                                    staying up to date with their often large
                                    and dispersed healthcare teams—from
                                    physicians to phlebotomists—maintaining
                                    end-to-end visibility on operations can get
                                    time-consuming for managers. But today’s
                                    digital tools, including AI, are reshaping
                                    the healthcare teams and support staff work.
                                </p>
                            </div>
                            <p>
                                2023-08-02<span>Manager</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(20)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(20) ? "on" : ""
                                }`}
                            >
                                The future of work: How next-generation AI is
                                empowering the frontline
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(20) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Over the last few years, manufacturing and
                                    mobility companies around the world have
                                    faced challenges that continue to demand
                                    resilience and agility. From post-COVID-19
                                    recovery to macro-economic uncertainties,
                                    these disruptors are impacting all
                                    levels—from leaders, to workers, to
                                    customers. We’ve seen strong and consistent
                                    double-digit growth in frontline workers’
                                    monthly active users of Microsoft Teams
                                    across the manufacturing and mobility
                                    sectors this year. To look beyond these
                                    obstacles and drive their organizations
                                    forward, industry leaders must continue to
                                    make proactive investments that accelerate
                                    their digital transformation journeys to
                                    strengthen competitiveness and resilienc
                                </p>
                                <p>
                                    One of the biggest opportunities here is
                                    around investing in and transforming the
                                    workforce. And for manufacturing and
                                    mobility companies, that means empowering
                                    one of the largest employee
                                    segments—frontline workers. With the
                                    advancements in digital tools and
                                    next-generation AI, Microsoft can
                                    <Link to="/support#;">
                                        &nbsp;transform the workplace&nbsp;
                                    </Link>
                                    in the same way that we are transforming
                                    other aspects of the business—by unleashing
                                    the power of intelligence. AI is a critical
                                    tool for unlocking a data-driven, connected,
                                    and collaborative workforce. By augmenting
                                    the capabilities of the frontline, AI can
                                    help free up workers to focus on
                                    higher-value tasks and activities.
                                </p>
                                <h4>
                                    Drive frontline efficiency and execution
                                    with AI and digital tools
                                </h4>
                                <p>
                                    With continued challenges like burnout,
                                    retention issues, and labor shortages,
                                    organizations across the industry—from
                                    discrete manufacturers and original
                                    equipment manufacturers (OEMs) to global
                                    airlines and courier services—can find value
                                    in reimagining the frontline worker
                                    experience using digitized tools and the
                                    power of AI. Today we’re partnering with
                                    customers like Siemens who are enabling
                                    frontline workers to close feedback loops
                                    faster and solve challenges together using
                                    the new Teamcenter app for Microsoft Teams,
                                    Komatsu Australia who is already achieving
                                    end-to-end automation with Microsoft Power
                                    Platform, and Sweden-based automobile brand
                                    Lynk & Co. who is using Microsoft Dynamics
                                    365 solutions to create unique processes and
                                    prioritize specific customer experiences.
                                </p>
                            </div>
                            <p>
                                2023-07-03<span>Manager</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(21)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(21) ? "on" : ""
                                }`}
                            >
                                Empowering your business: The latest from
                                Microsoft Cloud for Industry
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(21) ? "on" : ""
                                }`}
                            >
                                <p>
                                    This is an exciting time for partners and
                                    Microsoft. Last week, we celebrated the
                                    opportunities and successes across our
                                    products, services, and global partner
                                    ecosystem. Partners across multiple
                                    industries joined us at Microsoft Inspire
                                    2023 to learn about the latest developments
                                    at Microsoft.
                                </p>
                                <p>
                                    It was great to see industry infused
                                    throughout several sessions and news at
                                    Microsoft Inspire 2023. Our partner strategy
                                    continues to reflect the investments we’re
                                    making in our global partner ecosystem.
                                    These investments are detailed in our
                                    upcoming
                                    <Link to="/support#;">
                                        &nbsp;2023 wave 2 release plans
                                    </Link>
                                    .
                                </p>
                                <h4>Optimizing for partners</h4>
                                <p>
                                    We continue to invest, build, and expand
                                    industry-specific capabilities that
                                    accelerate time-to-value for our customers
                                    and partners, including lifecycle
                                    commitments every wave. In a recent blog,
                                    Kathleen Mitford, Corporate Vice President
                                    of Global Industry Marketing discussed in
                                    detail,
                                    <Link to="/support#;">
                                        &nbsp;our partner strategy
                                    </Link>
                                    , which aligns to three growth pillars:
                                </p>
                                <p>
                                    Accelerate your innovation and reduce time
                                    to market.
                                    <br />
                                    Quickly scale your go-to-market by helping
                                    partners drive. <br />
                                    Win new customers with industry solutions.
                                </p>
                                <p>
                                    We believe the industry cloud solutions will
                                    provide customers with simplicity and
                                    predictability when engaging with Microsoft.
                                    <Link to="/support#;">
                                        &nbsp;Watch on-demand sessions&nbsp;
                                    </Link>
                                    at Microsoft Inspire 2023 to learn more
                                    about our industry-specific investments.
                                </p>
                                <h4>The latest capabilities </h4>
                                <p>
                                    The release notes cover new features for
                                    <Link to="/support#;">
                                        &nbsp;Microsoft Cloud for Industry&nbsp;
                                    </Link>
                                    releasing from October 2023 through March
                                    2024. The latest plans for Microsoft Cloud
                                    for Industry bring new innovations that
                                    provide organizations with significant
                                    capabilities to transform business. The
                                    release contains several new features across
                                    Microsoft Cloud for Industry applications,
                                    including Microsoft Cloud for Healthcare,
                                    Microsoft Cloud for Retail, and Microsoft
                                    Cloud for Sustainability.
                                </p>
                                <h4>Healthcare</h4>
                                <p>
                                    <Link to="/support#;">
                                        &nbsp;Microsoft Cloud for
                                        Healthcare&nbsp;
                                    </Link>
                                    provides trusted and integrated capabilities
                                    that make it easier for healthcare
                                    organizations to create personalized patient
                                    experiences, give health teams connected
                                    collaboration tools, and adopt data
                                    standards important to healthcare. Together
                                    with Nuance, users can access
                                    the broadest and deepest set of
                                    trusted AI solutions to address some of
                                    the biggest challenges in healthcare.
                                    Organizations can use AI to provide full
                                    visibility into data, relieve provider
                                    administrative burden, boost clinician
                                    productivity, increase workflow automation
                                    to improve the quality of care, reduce
                                    clinician burnout, and deliver better care
                                    faster at a lower cost.
                                </p>
                            </div>
                            <p>
                                2023-06-30<span>Manager</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(22)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(22) ? "on" : ""
                                }`}
                            >
                                Announcing general availability of Azure Data
                                Manager for Energy
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(22) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Microsoft partners with the energy industry
                                    in the global transition to a more secure,
                                    equitable, and sustainable future. To
                                    support this transformative journey, we’re
                                    pleased to announce the general availability
                                    of
                                    <Link to="/support#;">
                                        &nbsp;Azure Data Manager for
                                        Energy&nbsp;
                                    </Link>
                                    . Designed to help energy companies
                                    accelerate digital innovation, Azure Data
                                    Manager for Energy is an open, fully-managed
                                    OSDU® Data Platform service powered by the
                                    <Link to="/support#;">
                                        &nbsp;Microsoft Cloud&nbsp;
                                    </Link>
                                    . The offering integrates with almost any
                                    dataset and source, enables management of
                                    compute-intensive workloads at global scale,
                                    and quickly ingests data for analytics and
                                    decision-making. Azure Data Manager for
                                    Energy is developed in alignment with the
                                    requirements of the OSDU Technical Standard
                                    for open-source innovation.
                                </p>
                                <p>
                                    With energy demand expected to increase by
                                    nearly 50 percent over the next 30 years,
                                    companies are accelerating innovation to
                                    meet the need for safe, reliable, and
                                    sustainable energy.1 Until more alternative,
                                    cost-effective solutions are available for
                                    energy operations, manufacturing and other
                                    industrial processes, companies will
                                    continue to look for ways to offset carbon
                                    emissions with initiatives such as carbon
                                    capture and storage (CSS).
                                </p>
                                <p>
                                    While tackling these complex issues, energy
                                    firms must also meet business goals. That
                                    means enabling growth and modernizing
                                    infrastructure by leveraging data to gain
                                    insights and create efficiencies. To balance
                                    priorities, energy organizations worldwide
                                    are using Microsoft’s cloud, data, and AI
                                    technologies to create a digital foundation
                                    for a more sustainable future.
                                </p>
                                <h4>
                                    Powering digital transformation with Azure
                                    Data Manager for Energy
                                </h4>
                                <p>
                                    Built to meet the needs of our global energy
                                    customers, Azure Data Manager for Energy is
                                    available in multiple Azure regions and
                                    expanding quickly to full, global
                                    availability.
                                </p>
                                <p>
                                    We’re also excited to offer two tiers—a
                                    standard tier to run high-scale,
                                    performance-driven production workloads, and
                                    a developer tier designed for partners and
                                    end users looking for more flexibility and
                                    speed in building new applications. Partners
                                    and customers can start with the developer
                                    tier to evaluate and plan implementation,
                                    accelerate application development, and test
                                    OSDU Data Platform applications. When ready
                                    to transform their operational environment,
                                    energy operators can use the standard tier
                                    to take advantage of enterprise grade,
                                    service level agreement (SLA)-backed
                                    performance for optimizing seismic,
                                    wellbore, and reservoir workflows. Learn
                                    more in the announcement of the
                                    <Link to="/support#;">
                                        &nbsp;Azure Data Manager for Energy
                                        developer tier
                                    </Link>
                                    .
                                </p>
                                <h4>
                                    Eliminating data silos with easy
                                    interoperability across an extensive global
                                    partner ecosystem
                                </h4>
                                <p>
                                    Our global partner ecosystem is fundamental
                                    to accelerating innovation across the energy
                                    sector. With Azure Data Manager for Energy,
                                    customers can speed toward goals by taking
                                    advantage of easy interoperability across an
                                    extensible application ecosystem. They can
                                    integrate virtually any dataset,
                                    application, or cloud service while
                                    leveraging the subsurface tools they already
                                    work with from SLB, Halliburton, and many
                                    others. To deploy OSDU Data Platform
                                    applications faster with fewer resources,
                                    energy companies can also work with their
                                    choice of systems integrators to help
                                    prepare and ingest data into Azure Data
                                    Manager for Energy.
                                </p>
                                <p>
                                    We are pleased to be working with many
                                    leading energy partners on Azure Data
                                    Manager for Energy and continue adding
                                    others to our extensive partner ecosystem.
                                </p>
                                <h4>
                                    Scaling efficiencies and operational
                                    insights with an enterprise-grade cloud
                                    platform
                                </h4>
                                <p>
                                    Azure Data Manager for Energy offers
                                    customers new tools to help speed
                                    implementation, integration, and innovation
                                    with organizations already using the
                                    platform for transformative solutions.
                                </p>
                                <p>
                                    For example, the easy integration helped
                                    Norwegian energy company Aker BP speed
                                    time-to-market by integrating Azure Data
                                    Manager for Energy with SLB and Halliburton
                                    applications to eliminate data siloes and
                                    time-consuming manual processes. Aker BP is
                                    empowered across the organization with
                                    strategic insights to make better decisions
                                    at the operational, engineering, and
                                    executive levels, with better predictability
                                    that helps save money and increase
                                    productivity. Operating with more precision
                                    enables Aker BP to not only lower
                                    operational costs, but also increase plant
                                    up-time while reducing CO2 emissions.
                                </p>
                                <p>
                                    TotalEnergies is another early adopter of
                                    Azure Data Manager for Energy. The company
                                    reports ease-of-deployment that completes in
                                    two hours with just a single click. And
                                    because Azure Data Manager for Energy is a
                                    fully managed cloud service, TotalEnergies
                                    can innovate with confidence backed by the
                                    solution’s scalability, seamless upgrades,
                                    and disaster recovery capabilities.
                                </p>
                            </div>
                            <p>
                                2023-06-27<span>Manager</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(23)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(23) ? "on" : ""
                                }`}
                            >
                                Microsoft Cloud for Manufacturing: Tackling data
                                accessibility in manufacturing alongside
                                partners
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(23) ? "on" : ""
                                }`}
                            >
                                <p>
                                    Over the past few years, Microsoft has
                                    collaborated with thousands of manufacturing
                                    customers, along with our partners. Through
                                    various projects, we have sought to
                                    understand the hurdles our customers face
                                    and explore how the Microsoft Cloud can
                                    provide incremental value in an environment
                                    of macro-economic headwinds.
                                </p>
                                <p>
                                    We recognize that each manufacturing
                                    customer is at a unique stage of their
                                    transformation journey, but all of them rely
                                    on a diverse ecosystem of technology
                                    capabilities from vendors with deep industry
                                    expertise. We believe that where we can add
                                    most value is by aiding customers in
                                    consolidating their data from this
                                    multifaceted ecosystem of solutions,
                                    ensuring that it is not only accessible but
                                    also secure.
                                </p>
                                <p>
                                    Microsoft has an
                                    <Link to="/support#;">
                                        &nbsp;unmatched set of deep
                                        technological capabilities&nbsp;
                                    </Link>
                                    that are already familiar to users across
                                    organizations, ranging from modern work to
                                    low-code and no-code, to data and AI.
                                    Bringing these technologies to life in an
                                    industry as complex and diverse as
                                    manufacturing requires deep domain
                                    expertise. Rather than trying to do this on
                                    our own, we believe in the capabilities of
                                    our partners to bring the value of the
                                    Microsoft stack to the industry.
                                </p>
                                <h4>
                                    New opportunities for partners with the
                                    Microsoft AI Cloud Partner Program
                                </h4>
                                <p>
                                    I’m very excited about all the
                                    <Link to="/support#;">
                                        &nbsp;updates being shared at Microsoft
                                        Inspire 2023
                                    </Link>
                                    , particularly about the announcement of the
                                    new
                                    <Link to="/support#;">
                                        &nbsp;Microsoft AI Cloud Partner Program
                                        (MAICPP)&nbsp;
                                    </Link>
                                    and the additional offerings and benefits
                                    this brings for partners. Under the program,
                                    I’m thrilled to announce that we will be
                                    including manufacturing partner solutions
                                    through new independent software vendor
                                    (ISV) designations.
                                </p>
                                <p>
                                    This designation represents our commitment
                                    to bringing the best partner solutions to
                                    our customers and provides a way for
                                    customers to identify proven partner
                                    solutions aligned with the
                                    <Link to="/support#;">
                                        &nbsp;Microsoft Cloud&nbsp;
                                    </Link>
                                    and our industry clouds. The designation
                                    validates that our partners’ solutions meet
                                    the high standards of data accessibility
                                    specific to the manufacturing industry.
                                </p>
                                <p>
                                    Our customers tell us that data
                                    accessibility is their number one priority,
                                    especially as they look to adopt AI
                                    technologies at scale across the value
                                    chain. The new ISV designation will ensure
                                    customers can access data generated through
                                    their own applications, certified partner
                                    solutions, and Microsoft Cloud solutions to
                                    improve operational efficiency and data
                                    visibility.
                                </p>
                                <p>
                                    This focus on data accessibility and closer
                                    collaboration with partners signals a new
                                    stage for Microsoft Cloud for Manufacturing.
                                    We are open for business and ready to tackle
                                    our customers’ biggest challenges with a
                                    robust ecosystem of partner solutions,
                                    complemented by the security and scalability
                                    of the Microsoft Cloud and Microsoft
                                    products.
                                </p>
                                <p>
                                    We want to thank our first wave of partners
                                    who are bringing their transformative
                                    solutions and services to Microsoft Cloud
                                    for Manufacturing:
                                    <br />
                                    Find these partner solutions, and much more
                                    on
                                    <Link to="/support#;">
                                        &nbsp;Microsoft AppSource
                                    </Link>
                                    .
                                </p>
                                <h4>About Microsoft Cloud for Manufacturing</h4>
                                <p>
                                    Microsoft Cloud for Manufacturing brings the
                                    best of Microsoft and our partners together
                                    to jointly accelerate the digital
                                    transformation in manufacturing, unlocking
                                    engineering and design innovation with cloud
                                    computing and AI, building a more resilient
                                    supply chain to anticipate risks, enabling
                                    intelligent factories, and helping modernize
                                    the customer experience with the latest
                                    digital technologies. Manufacturers rely on
                                    an ecosystem of many different industry
                                    solutions from different vendors. Microsoft
                                    Cloud for Manufacturing orchestrates this
                                    complex ecosystem of solutions, delivering
                                    transparent, efficient, and interoperable
                                    processes, to democratize data insights, and
                                    foster collaboration across the value chain.
                                </p>
                            </div>
                            <p>
                                2023-05-23<span>Manager</span>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div
                            className="title"
                            onClick={() => handleTabClick(24)}
                        >
                            <h2
                                className={`${
                                    menuTab.includes(24) ? "on" : ""
                                }`}
                            >
                                Announcing Well-Architected for Industry:
                                Improve workloads and solution deployments
                            </h2>
                            <div
                                className={`text ${
                                    menuTab.includes(24) ? "on" : ""
                                }`}
                            >
                                <p>
                                    As organizations look to deploy industry
                                    solutions on Microsoft Cloud, embarking on a
                                    successful solution implementation can
                                    appear overwhelming. To help our partner and
                                    customer ecosystem effectively implement new
                                    industry solutions, we are thrilled to
                                    announce
                                    <Link to="/support#;">
                                        &nbsp;Well-Architected for Industry
                                    </Link>
                                    , a set of principles that provides
                                    prescriptive guidance to improve the quality
                                    of industry solution deployments. Building
                                    on the success of the
                                    <Link to="/support#;">
                                        &nbsp;Well-Architected for Azure&nbsp;
                                    </Link>
                                    framework, we are starting with
                                    <Link to="/support#;">
                                        &nbsp;Microsoft Cloud for Sustainability
                                    </Link>
                                    .
                                </p>
                                <h4>
                                    Guiding your Microsoft Cloud for
                                    Sustainability journey
                                </h4>
                                <p>
                                    With increasing global regulations and a
                                    push to net-zero, organizations are seeking
                                    to accelerate their sustainability progress
                                    and business growth. Microsoft Cloud for
                                    Sustainability is a comprehensive and
                                    extensible solution that brings together a
                                    set of environmental, social, and governance
                                    (ESG) capabilities from Microsoft Azure,
                                    Microsoft 365, Microsoft Dynamics 365, and
                                    solutions from our global ecosystem of
                                    partners. We recently announced Microsoft
                                    Sustainability Manager, a
                                    <Link to="/support#;">
                                        &nbsp;Microsoft Cloud for
                                        Sustainability&nbsp;
                                    </Link>
                                    solution, is being expanded
                                    <Link to="/support#;">
                                        &nbsp;to give customers fuller
                                        visibility&nbsp;
                                    </Link>
                                    into their environmental impact across
                                    carbon, water, and waste. New capabilities
                                    will help customers create a comprehensive
                                    ESG data estate and prepare them to meet new
                                    reporting requirements.
                                </p>
                                <p>
                                    As part of the Well-Architected for Industry
                                    framework, we have curated context-relevant
                                    implementation guidance to support the
                                    entire solution development lifecycle
                                    starting from design and architecting to
                                    operational monitoring. The framework
                                    consists of five pillars of architectural
                                    excellence including reliability, cost
                                    optimization, operational excellence,
                                    performance efficiency, and security.
                                    Project Managers, Solution Architects,
                                    Developers, operational team members, and
                                    System Administrators can benefit by
                                    applying these pillars to their workloads.
                                </p>
                                <p>
                                    The Well-Architected for Industry framework
                                    is intended to provide substantial benefits
                                    to partners and customers. For instance, a
                                    partner hired to configure Microsoft
                                    Sustainability Manager can leverage the
                                    framework to design reliable and scalable
                                    architecture to build their customer’s
                                    carbon emission calculations and reporting
                                    workloads. By incorporating security
                                    practices, the partner can ensure robust
                                    data protection and compliance with industry
                                    standards. Additionally, the framework’s
                                    performance optimization guidance enables
                                    the partner to enhance the application’s
                                    responsiveness and user experience. The
                                    framework also assists in establishing
                                    effective governance and operational
                                    processes, ensuring visibility and control
                                    over the application’s infrastructure.
                                    Ultimately, the partner can deliver a
                                    successful solution to their customers,
                                    meeting their requirements while adhering to
                                    best practices and industry guidelines.
                                </p>
                                <h4>Reference architecture</h4>
                                <p>
                                    Reference architectures are a viable
                                    starting point during the initial solution
                                    modeling and design sessions and paint the
                                    holistic picture of the core components of
                                    Microsoft Cloud for Sustainability. As an
                                    example, a Solution Architect can leverage
                                    the
                                    <Link to="/support#;">
                                        &nbsp;reference architecture for
                                        Microsoft Sustainability Manager&nbsp;
                                    </Link>
                                    to identify the required data ingestion
                                    strategies and extensibility needed for
                                    emission calculations. Further, reference
                                    architecture can be leveraged to identify
                                    the project tasks, and bill of materials
                                    during the estimation phase of the
                                    implementation. For an IT admin, the
                                    reference architecture provides a detailed
                                    view into the components that need to be
                                    managed and maintained by the customer
                                    through their processes such as user
                                    permissions, and the components that are
                                    self-managed by the system such as the
                                    analytics data lake and dataverse
                                    components.
                                </p>
                                <p>
                                    We have launched reference architecture for
                                    Microsoft Sustainability Manager and the
                                    Emissions Impact Dashboard for Microsoft
                                    Azure and Microsoft 365. These guidelines
                                    also provide guidance on security, user
                                    interface, analytics, and
                                    integration—including a clear sense of
                                    separation between extensible and managed
                                    components and capabilities.
                                </p>
                            </div>
                            <p>
                                2023-05-07<span>Manager</span>
                            </p>
                        </div>
                    </article>
                </article>
            </div>
        </section>
    );
}

export default Support;

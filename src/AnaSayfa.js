import Footer from "./Components/Footer";
import Header from "./Components/Header";

function AnaSayfa() {
    return (
      <>
      <Header />
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1>
                Context Menu{" "}
                <small>context menu based on bootstrap dropdown menu</small>
              </h1>
            </div>
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <div className="page-toolbar">
              {/* BEGIN THEME PANEL */}
              <div className="btn-group btn-theme-panel">
                <a
                  href="javascript:;"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="icon-settings" />
                </a>
                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <h3>THEME COLORS</h3>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-default"
                              data-theme="default"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Default</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-hoki"
                              data-theme="blue-hoki"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Blue Hoki</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-steel"
                              data-theme="blue-steel"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Blue Steel</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-orange"
                              data-theme="yellow-orange"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Orange</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-crusta"
                              data-theme="yellow-crusta"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Yellow Crusta
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-green-haze"
                              data-theme="green-haze"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Green Haze</span>
                            </li>
                            <li
                              className="theme-color theme-color-red-sunglo"
                              data-theme="red-sunglo"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Red Sunglo</span>
                            </li>
                            <li
                              className="theme-color theme-color-red-intense"
                              data-theme="red-intense"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Red Intense</span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-plum"
                              data-theme="purple-plum"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Purple Plum</span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-studio"
                              data-theme="purple-studio"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Studio
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                      <h3>LAYOUT</h3>
                      <ul className="theme-settings">
                        <li>
                          Theme Style
                          <select
                            className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change theme style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Square corners
                            </option>
                            <option value="rounded">Rounded corners</option>
                          </select>
                        </li>
                        <li>
                          Layout
                          <select
                            className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change layout type"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Boxed
                            </option>
                            <option value="fluid">Fluid</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Style
                          <select
                            className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change top menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Mode
                          <select
                            className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) top menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="not-fixed" selected="selected">
                              Not Fixed
                            </option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Style
                          <select
                            className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change mega menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Mode
                          <select
                            className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) mega menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed" selected="selected">
                              Fixed
                            </option>
                            <option value="not-fixed">Not Fixed</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* END THEME PANEL */}
            </div>
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            <div
              className="modal fade"
              id="portlet-config"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">Widget settings form goes here</div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Home</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="components_context_menu.html">UI Components</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Context Menu</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-6">
                {/* BEGIN PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption font-purple-plum">
                      <i className="icon-speech font-purple-plum" />
                      <span className="caption-subject bold uppercase">
                        {" "}
                        Demo 1
                      </span>
                      <span className="caption-helper">
                        right click inside the box
                      </span>
                    </div>
                    <div className="actions">
                      <a
                        className="btn btn-circle btn-icon-only btn-default"
                        href="javascript:;"
                      >
                        <i className="icon-cloud-upload" />
                      </a>
                      <a
                        className="btn btn-circle btn-icon-only btn-default"
                        href="javascript:;"
                      >
                        <i className="icon-wrench" />
                      </a>
                      <a
                        className="btn btn-circle btn-icon-only btn-default"
                        href="javascript:;"
                      >
                        <i className="icon-trash" />
                      </a>
                      <a
                        className="btn btn-circle btn-icon-only btn-default fullscreen"
                        href="javascript:;"
                        data-original-title=""
                        title=""
                      ></a>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div
                      id="context"
                      data-toggle="context"
                      data-target="#context-menu"
                    >
                      <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula, eget lacinia odio sem nec elit. Cras mattis
                        consectetur purus sit amet fermentum. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia
                        odio sem nec elit. Cras mattis consectetur purus sit.
                      </p>
                    </div>
                    {/* Your custom menu with dropdown-menu as default styling */}
                    <div id="context-menu">
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="javascript:;">
                            <i className="icon-user" /> New User{" "}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-present" /> New Event{" "}
                            <span className="badge badge-success">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-basket" /> New order{" "}
                          </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-flag" /> Pending Orders{" "}
                            <span className="badge badge-danger">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-users" /> Pending Users{" "}
                            <span className="badge badge-warning">12</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
              <div className="col-md-6">
                {/* BEGIN PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption font-purple-plum">
                      <i className="icon-speech font-purple-plum" />
                      <span className="caption-subject bold uppercase">
                        {" "}
                        Demo 2
                      </span>
                      <span className="caption-helper">
                        right click inside the box
                      </span>
                    </div>
                    <div className="actions">
                      <div className="btn-group">
                        <a
                          className="btn btn-circle btn-default btn-sm"
                          href="javascript:;"
                          data-toggle="dropdown"
                        >
                          <i className="fa fa-user" /> User{" "}
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                          <li>
                            <a href="javascript:;">
                              <i className="icon-user" /> New User{" "}
                            </a>
                          </li>
                          <li>
                            <a href="javascript:;">
                              <i className="icon-present" /> New Event{" "}
                              <span className="badge badge-success">4</span>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:;">
                              <i className="icon-basket" /> New order{" "}
                            </a>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <a href="javascript:;">
                              <i className="icon-flag" /> Pending Orders{" "}
                              <span className="badge badge-danger">4</span>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:;">
                              <i className="icon-users" /> Pending Users{" "}
                              <span className="badge badge-warning">12</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="javascript:;"
                        className="btn btn-circle red-sunglo btn-sm"
                      >
                        <i className="fa fa-plus" /> Add{" "}
                      </a>
                      <a
                        className="btn btn-circle btn-icon-only btn-default fullscreen"
                        href="javascript:;"
                        data-original-title=""
                        title=""
                      ></a>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div id="main" data-toggle="context">
                      This is an area where the context menu is active.{" "}
                      <span className="label label-danger">
                        However, we wont allow it here.
                      </span>{" "}
                      But anywhere else in this text should be perfectly fine. This
                      one is started with only javascript
                    </div>
                    <div id="context-menu2">
                      <ul className="dropdown-menu pull-left" role="menu">
                        <li>
                          <a href="javascript:;">
                            <i className="icon-user" /> New User{" "}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-present" /> New Event{" "}
                            <span className="badge badge-success">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-basket" /> New order{" "}
                          </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-flag" /> Pending Orders{" "}
                            <span className="badge badge-danger">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-users" /> Pending Users{" "}
                            <span className="badge badge-warning">12</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {/* BEGIN PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption font-red-intense">
                      <i className="icon-speech font-red-intense" />
                      <span className="caption-subject bold uppercase">
                        {" "}
                        Demo 3
                      </span>
                      <span className="caption-helper">
                        fetch clicked menu item
                      </span>
                    </div>
                    <div className="tools">
                      <a
                        href=""
                        className="collapse"
                        data-original-title=""
                        title=""
                      ></a>
                      <a
                        href="#portlet-config"
                        data-toggle="modal"
                        className="config"
                        data-original-title=""
                        title=""
                      ></a>
                      <a
                        href=""
                        className="reload"
                        data-original-title=""
                        title=""
                      ></a>
                      <a
                        href=""
                        className="fullscreen"
                        data-original-title=""
                        title=""
                      ></a>
                      <a
                        href=""
                        className="remove"
                        data-original-title=""
                        title=""
                      ></a>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div
                      id="context2"
                      data-toggle="context"
                      data-target="#context-menu"
                    >
                      <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula, eget lacinia odio sem nec elit. Cras mattis
                        consectetur purus sit amet fermentum. Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula, eget lacinia
                        odio sem nec elit. Cras mattis consectetur purus sit.
                      </p>
                    </div>
                    {/* Your custom menu with dropdown-menu as default styling */}
                    <div id="context-menu">
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="javascript:;">
                            <i className="icon-user" /> New User{" "}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-present" /> New Event{" "}
                            <span className="badge badge-success">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-basket" /> New order{" "}
                          </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-flag" /> Pending Orders{" "}
                            <span className="badge badge-danger">4</span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i className="icon-users" /> Pending Users{" "}
                            <span className="badge badge-warning">12</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      <Footer />
    </>
    
  );
  }
  export default AnaSayfa;
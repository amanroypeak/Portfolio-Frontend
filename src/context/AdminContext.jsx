import { createContext, useEffect, useState } from "react";
import axiosInstance from "../api/axios";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isAdmin, setIsAdmin] = useState(false);

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (token) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [token]);

  // ================= LOGIN =================

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post("/admin/login", {
        email,
        password,
      });

      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);

        return { success: true };
      }

      return {
        success: false,
        message: data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    }
  };

  // ================= LOGOUT =================

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsAdmin(false);
  };

  // ================= GET SKILLS =================

  const getSkills = async () => {
    try {
      const { data } = await axiosInstance.get("/skills");

      if (data.success) {
        setSkills(data.skills);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addSkill = async (skillData) => {
  try {
    const { data } = await axiosInstance.post(
      "/skills/add",
      skillData,
      {
        headers: {
          token,
        },
      }
    );

    if (data.success) {
      getSkills();
      return data;
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

const deleteSkill = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `/skills/delete/${id}`,
      {
        headers: {
          token,
        },
      }
    );

    if (data.success) {
      getSkills();
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

  // ================= GET PROJECTS =================

  const getProjects = async () => {
    try {
      const { data } = await axiosInstance.get("/projects");

      if (data.success) {
        setProjects(data.projects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addProject = async (projectData) => {
  try {
    const { data } = await axiosInstance.post(
      "/projects/add",
      projectData,
      {
        headers: {
          token,
        },
      }
    );

    if (data.success) {
      getProjects();
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

const deleteProject = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `/projects/delete/${id}`,
      {
        headers: {
          token,
        },
      }
    );

    if (data.success) {
      getProjects();
    }

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

const sendMessage = async (formData) => {
  try {
    const { data } = await axiosInstance.post("/messages/send", formData);

    return data;
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};


  useEffect(() => {
    getSkills();
    getProjects();
  }, []);

  const value = {
    token,
    isAdmin,
    login,
    logout,
    addSkill,
    deleteSkill,

    skills,
    getSkills,

    projects,
    getProjects,

    addProject,
    deleteProject,
    sendMessage,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
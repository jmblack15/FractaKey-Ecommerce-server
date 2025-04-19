import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";

const UserController = () => {
  const prisma = new PrismaClient();
  const getUsers = async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      return res.status(StatusCodes.OK).json(users);
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
    }
  };

  return {
    getUsers,
  };
};

export { UserController };

import { AppShell, Box, Header, Navbar } from "@mantine/core";
import React from "react";
import Image from "next/image";
import { useMe } from "../context/me";
import Link from "next/link";
import { Anchor } from "tabler-icons-react";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  const { user, refetch } = useMe();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          Side Items
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Box>
            <Box>
              <Image src="/logo.png" alt="logo" width="100px" height="40px" />
              {!user && (
                <>
                  <Link href="/auth/login" passHref>
                    <Anchor>Login</Anchor>
                  </Link>
                  <Link href="/auth/register" passHref>
                    <Anchor>Register</Anchor>
                  </Link>
                </>
              )}

              {user && <p>Upload a video</p>}
            </Box>
          </Box>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default HomePageLayout;

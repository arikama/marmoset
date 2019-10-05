package main

func (s *server) routes() {
	s.router.HandleFunc("/words", s.words())
	s.router.HandleFunc("/", s.root())
}
